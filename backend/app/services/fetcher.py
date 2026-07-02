import httpx
import socket
import ipaddress
from urllib.parse import urlparse

from app.services.document import ParsedDocument


class FetchError(Exception):
    pass


def validate_url(url: str) -> bool:
    try:
        parsed = urlparse(url)

        if parsed.scheme not in ("http", "https"):
            return False

        if not parsed.netloc:
            return False

        return True
    except Exception:
        return False


def is_public_host(hostname: str) -> bool:
    try:
        ip = socket.gethostbyname(hostname)
        ip_obj = ipaddress.ip_address(ip)

        return not (
            ip_obj.is_private
            or ip_obj.is_loopback
            or ip_obj.is_link_local
            or ip_obj.is_reserved
        )
    except Exception:
        return False


def fetch_page(url: str) -> ParsedDocument:
    if not validate_url(url):
        raise FetchError("Invalid URL")

    parsed = urlparse(url)

    if not parsed.hostname:
        raise FetchError("Invalid hostname")

    if not is_public_host(parsed.hostname):
        raise FetchError("Blocked host")

    try:
        with httpx.Client(
            follow_redirects=True,
            timeout=httpx.Timeout(10.0, connect=5.0),
            headers={"User-Agent": "SEO-Audit-Tool"}
        ) as client:

            response = client.get(url)

            if response.status_code >= 400:
                raise FetchError(f"HTTP error {response.status_code}")

            return ParsedDocument(
                url=url,
                final_url=str(response.url),
                status_code=response.status_code,
                html=response.text
            )

    except httpx.TimeoutException:
        raise FetchError("Timeout")

    except httpx.RequestError as e:
        raise FetchError(f"Request error: {str(e)}")

    except Exception as e:
        raise FetchError(f"Unexpected error: {str(e)}")
from urllib.parse import urlparse
import socket
import ipaddress

from playwright.sync_api import sync_playwright, TimeoutError as PlaywrightTimeoutError

from app.services.document import ParsedDocument


class FetchError(Exception):
    pass


def validate_url(url: str) -> bool:
    try:
        parsed = urlparse(url)

        return (
            parsed.scheme in ("http", "https")
            and bool(parsed.netloc)
        )
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
        with sync_playwright() as p:
            browser = p.chromium.launch(
                headless=True,
                args=[
                    "--no-sandbox",
                    "--disable-dev-shm-usage",
                ],
            )

            page = browser.new_page()

            page.set_default_timeout(30000)

            response = page.goto(
                url,
                wait_until="domcontentloaded",
                timeout=30000,
            )

            if response is None:
                browser.close()
                raise FetchError("No response received")

            if response.status >= 400:
                browser.close()
                raise FetchError(f"HTTP error {response.status}")

            html = page.content()

            document = ParsedDocument(
                url=url,
                final_url=page.url,
                status_code=response.status,
                html=html,
            )

            browser.close()

            return document

    except PlaywrightTimeoutError:
        raise FetchError("Request timed out")

    except Exception as e:
        raise FetchError(str(e))
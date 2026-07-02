import time
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse
import httpx


class PerformanceAnalyzer:
    def analyze(self, soup: BeautifulSoup, url: str, html: str):
        start_time = time.time()

        page_size_kb = len(html.encode("utf-8")) / 1024

        requests_count = 0
        css_count = 0
        js_count = 0
        img_count = 0
        img_total_size_kb = 0

        resources = []

        for tag in soup.find_all(["img", "script", "link"]):

            if tag.name == "img" and tag.get("src"):
                img_count += 1
                resources.append(tag["src"])

            if tag.name == "script" and tag.get("src"):
                js_count += 1
                resources.append(tag["src"])

            if tag.name == "link" and tag.get("href"):
                if "stylesheet" in tag.get("rel", []):
                    css_count += 1
                    resources.append(tag["href"])

        base_url = url

        client = httpx.Client(timeout=5.0)

        for r in resources:
            try:
                full_url = urljoin(base_url, r)
                resp = client.head(full_url, follow_redirects=True)

                if resp.status_code < 400:
                    requests_count += 1

                    content_length = resp.headers.get("content-length")
                    if content_length:
                        if "image" in resp.headers.get("content-type", ""):
                            img_total_size_kb += int(content_length) / 1024

            except Exception:
                continue

        load_time = time.time() - start_time

        return {
            "rule": "performance",
            "status": "pass",
            "message": "Performance metrics calculated",
            "element": None,
            "recommendation": "Optimize resources for faster loading.",
            "metrics": {
                "response_time_sec": round(load_time, 2),
                "page_size_kb": round(page_size_kb, 2),
                "http_requests": requests_count,
                "css_files": css_count,
                "js_files": js_count,
                "image_count": img_count,
                "image_total_size_kb": round(img_total_size_kb, 2),
            }
        }
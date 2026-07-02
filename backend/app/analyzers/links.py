# app/analyzers/links.py

from .base import BaseAnalyzer
from urllib.parse import urlparse


class LinksAnalyzer(BaseAnalyzer):
    rule_name = "links"

    def analyze(self, soup, url):
        links = soup.find_all("a", href=True)

        internal = 0
        external = 0

        base = urlparse(url).netloc

        for link in links:
            href = link["href"]
            if base in href:
                internal += 1
            else:
                external += 1

        return {
            "rule": self.rule_name,
            "status": "pass",
            "message": "Links analyzed",
            "element": f"internal={internal}, external={external}",
            "recommendation": "Ensure internal linking structure is strong."
        }
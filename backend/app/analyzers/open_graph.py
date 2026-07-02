# app/analyzers/open_graph.py

from .base import BaseAnalyzer


class OpenGraphAnalyzer(BaseAnalyzer):
    rule_name = "open_graph"

    def analyze(self, soup, url):
        og_title = soup.find("meta", property="og:title")
        og_desc = soup.find("meta", property="og:description")

        if not og_title or not og_desc:
            return {
                "rule": self.rule_name,
                "status": "warning",
                "message": "Missing Open Graph tags",
                "element": None,
                "recommendation": "Add og:title and og:description for social sharing."
            }

        return {
            "rule": self.rule_name,
            "status": "pass",
            "message": "Open Graph tags present",
            "element": None,
            "recommendation": "No action needed."
        }
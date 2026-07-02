# app/analyzers/canonical.py

from .base import BaseAnalyzer


class CanonicalAnalyzer(BaseAnalyzer):
    rule_name = "canonical"

    def analyze(self, soup, url):
        tag = soup.find("link", rel="canonical")

        if not tag:
            return {
                "rule": self.rule_name,
                "status": "warning",
                "message": "Missing canonical URL",
                "element": None,
                "recommendation": "Add canonical tag to prevent duplicate content issues."
            }

        return {
            "rule": self.rule_name,
            "status": "pass",
            "message": "Canonical URL present",
            "element": tag.get("href"),
            "recommendation": "No action needed."
        }
# app/analyzers/structured_data.py

from .base import BaseAnalyzer


class StructuredDataAnalyzer(BaseAnalyzer):
    rule_name = "structured_data"

    def analyze(self, soup, url):
        scripts = soup.find_all("script", type="application/ld+json")

        if not scripts:
            return {
                "rule": self.rule_name,
                "status": "warning",
                "message": "No structured data found",
                "element": None,
                "recommendation": "Add Schema.org JSON-LD markup."
            }

        return {
            "rule": self.rule_name,
            "status": "pass",
            "message": "Structured data present",
            "element": f"{len(scripts)} blocks",
            "recommendation": "No action needed."
        }
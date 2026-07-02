# app/analyzers/headings.py

from .base import BaseAnalyzer


class HeadingsAnalyzer(BaseAnalyzer):
    rule_name = "headings"

    def analyze(self, soup, url):
        h1 = soup.find_all("h1")

        if len(h1) == 0:
            return {
                "rule": self.rule_name,
                "status": "fail",
                "message": "Missing H1 tag",
                "element": None,
                "recommendation": "Add exactly one H1 tag."
            }

        if len(h1) > 1:
            return {
                "rule": self.rule_name,
                "status": "warning",
                "message": "Multiple H1 tags found",
                "element": f"{len(h1)} H1 tags",
                "recommendation": "Use only one H1 for proper hierarchy."
            }

        return {
            "rule": self.rule_name,
            "status": "pass",
            "message": "Heading structure is valid",
            "element": "H1 present",
            "recommendation": "No action needed."
        }
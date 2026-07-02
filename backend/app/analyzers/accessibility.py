# app/analyzers/accessibility.py

from .base import BaseAnalyzer


class AccessibilityAnalyzer(BaseAnalyzer):
    rule_name = "accessibility"

    def analyze(self, soup, url):
        issues = []

        if not soup.html.get("lang"):
            issues.append("Missing lang attribute")

        if issues:
            return {
                "rule": self.rule_name,
                "status": "warning",
                "message": "Accessibility issues found",
                "element": ", ".join(issues),
                "recommendation": "Add lang attribute and improve semantic HTML."
            }

        return {
            "rule": self.rule_name,
            "status": "pass",
            "message": "Basic accessibility OK",
            "element": None,
            "recommendation": "No action needed."
        }
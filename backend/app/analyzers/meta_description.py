# app/analyzers/meta_description.py

from .base import BaseAnalyzer


class MetaDescriptionAnalyzer(BaseAnalyzer):
    rule_name = "meta_description"

    def analyze(self, soup, url):
        tag = soup.find("meta", attrs={"name": "description"})
        content = tag["content"].strip() if tag and tag.get("content") else None

        if not content:
            return {
                "rule": self.rule_name,
                "status": "fail",
                "message": "Missing meta description",
                "element": "meta[name=description]",
                "recommendation": "Add a clear meta description (120–160 characters)."
            }

        if len(content) < 50:
            return {
                "rule": self.rule_name,
                "status": "warning",
                "message": "Meta description too short",
                "element": content,
                "recommendation": "Expand description to improve CTR."
            }

        return {
            "rule": self.rule_name,
            "status": "pass",
            "message": "Meta description is valid",
            "element": content,
            "recommendation": "No action needed."
        }
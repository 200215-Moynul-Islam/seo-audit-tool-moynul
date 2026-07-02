# app/analyzers/robots.py

from .base import BaseAnalyzer


class RobotsAnalyzer(BaseAnalyzer):
    rule_name = "robots"

    def analyze(self, soup, url):
        tag = soup.find("meta", attrs={"name": "robots"})

        content = tag["content"] if tag and tag.get("content") else None

        if content and "noindex" in content:
            return {
                "rule": self.rule_name,
                "status": "fail",
                "message": "Page is set to noindex",
                "element": content,
                "recommendation": "Remove noindex if page should be indexed."
            }

        return {
            "rule": self.rule_name,
            "status": "pass",
            "message": "Robots meta tag is OK",
            "element": content,
            "recommendation": "No action needed."
        }
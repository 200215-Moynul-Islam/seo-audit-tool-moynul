# app/analyzers/twitter.py

from .base import BaseAnalyzer


class TwitterAnalyzer(BaseAnalyzer):
    rule_name = "twitter_card"

    def analyze(self, soup, url):
        card = soup.find("meta", attrs={"name": "twitter:card"})

        if not card:
            return {
                "rule": self.rule_name,
                "status": "warning",
                "message": "Missing Twitter Card metadata",
                "element": None,
                "recommendation": "Add twitter:card for better sharing previews."
            }

        return {
            "rule": self.rule_name,
            "status": "pass",
            "message": "Twitter Card present",
            "element": card.get("content"),
            "recommendation": "No action needed."
        }
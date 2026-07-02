# app/analyzers/title.py

from bs4 import BeautifulSoup
from .base import BaseAnalyzer


class TitleAnalyzer(BaseAnalyzer):
    rule_name = "title"

    def analyze(self, soup: BeautifulSoup, url: str):
        title = soup.title.string.strip() if soup.title and soup.title.string else None

        if not title:
            return {
                "rule": self.rule_name,
                "status": "fail",
                "message": "Missing page title",
                "element": "title",
                "recommendation": "Add a unique and descriptive <title> tag."
            }

        if len(title) < 10:
            return {
                "rule": self.rule_name,
                "status": "warning",
                "message": "Title is too short",
                "element": title,
                "recommendation": "Make title more descriptive (50–60 characters recommended)."
            }

        return {
            "rule": self.rule_name,
            "status": "pass",
            "message": "Title is valid",
            "element": title,
            "recommendation": "No action needed."
        }
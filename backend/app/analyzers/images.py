# app/analyzers/images.py

from .base import BaseAnalyzer


class ImagesAnalyzer(BaseAnalyzer):
    rule_name = "images"

    def analyze(self, soup, url):
        images = soup.find_all("img")

        missing_alt = [img for img in images if not img.get("alt")]

        if len(missing_alt) == len(images) and images:
            return {
                "rule": self.rule_name,
                "status": "fail",
                "message": "All images missing alt attributes",
                "element": None,
                "recommendation": "Add meaningful alt text to all images."
            }

        if missing_alt:
            return {
                "rule": self.rule_name,
                "status": "warning",
                "message": f"{len(missing_alt)} images missing alt text",
                "element": f"{len(missing_alt)} images",
                "recommendation": "Add alt attributes for accessibility and SEO."
            }

        return {
            "rule": self.rule_name,
            "status": "pass",
            "message": "All images have alt text",
            "element": None,
            "recommendation": "No action needed."
        }
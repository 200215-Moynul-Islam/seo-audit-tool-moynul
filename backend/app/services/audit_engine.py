from app.analyzers.title import TitleAnalyzer
from app.analyzers.meta_description import MetaDescriptionAnalyzer
from app.analyzers.headings import HeadingsAnalyzer
from app.analyzers.images import ImagesAnalyzer
from app.analyzers.canonical import CanonicalAnalyzer
from app.analyzers.robots import RobotsAnalyzer
from app.analyzers.open_graph import OpenGraphAnalyzer
from app.analyzers.twitter import TwitterAnalyzer
from app.analyzers.structured_data import StructuredDataAnalyzer
from app.analyzers.links import LinksAnalyzer
from app.analyzers.accessibility import AccessibilityAnalyzer
from app.analyzers.performance import PerformanceAnalyzer


class AuditEngine:
    def __init__(self):
        self.analyzers = [
            TitleAnalyzer(),
            MetaDescriptionAnalyzer(),
            HeadingsAnalyzer(),
            ImagesAnalyzer(),
            CanonicalAnalyzer(),
            RobotsAnalyzer(),
            OpenGraphAnalyzer(),
            TwitterAnalyzer(),
            StructuredDataAnalyzer(),
            LinksAnalyzer(),
            AccessibilityAnalyzer(),
        ]
        self.performance_analyzer = PerformanceAnalyzer()

    def run(self, document):
        soup = document.soup
        url = document.final_url
        html = document.html

        results = []

        for analyzer in self.analyzers:
            results.append(analyzer.analyze(soup, url))

        performance_result = self.performance_analyzer.analyze(soup, url, html)

        results.append(performance_result)

        return {
            "url": url,
            "issues": results
        }
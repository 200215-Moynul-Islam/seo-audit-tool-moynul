from abc import ABC, abstractmethod
from bs4 import BeautifulSoup
from typing import Dict, Any


class BaseAnalyzer(ABC):
    rule_name: str

    @abstractmethod
    def analyze(self, soup: BeautifulSoup, url: str) -> Dict[str, Any]:
        """
        Returns:
        {
            rule,
            status,
            message,
            element,
            recommendation
        }
        """
        pass
from bs4 import BeautifulSoup
from app.services.document import ParsedDocument


def parse_html(document: ParsedDocument) -> ParsedDocument:
    if not document.html:
        raise ValueError("Empty HTML")

    document.soup = BeautifulSoup(document.html, "lxml")
    return document
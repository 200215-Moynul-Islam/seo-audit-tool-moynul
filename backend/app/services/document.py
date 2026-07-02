from pydantic import BaseModel
from typing import Optional
from bs4 import BeautifulSoup


class ParsedDocument(BaseModel):
    url: str
    final_url: str
    status_code: int
    html: str
    soup: Optional[BeautifulSoup] = None

    class Config:
        arbitrary_types_allowed = True
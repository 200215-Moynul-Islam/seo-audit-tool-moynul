from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

from app.services.fetcher import fetch_page, FetchError
from app.services.parser import parse_html
from app.services.audit_engine import AuditEngine


router = APIRouter()


class AuditRequest(BaseModel):
    url: str


@router.post("/audit")
def audit_site(payload: AuditRequest):
    try:
        document = fetch_page(payload.url)
        document = parse_html(document)

        engine = AuditEngine()
        result = engine.run(document)

        return {
            "success": True,
            "data": result
        }

    except FetchError as e:
        raise HTTPException(status_code=400, detail=str(e))

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
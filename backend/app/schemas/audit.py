from pydantic import BaseModel
from typing import Optional, List, Literal


Status = Literal["pass", "warning", "fail"]


class AuditIssue(BaseModel):
    rule: str
    status: Status
    message: str
    element: Optional[str] = None
    recommendation: str


class AuditReport(BaseModel):
    url: str
    issues: List[AuditIssue]
    score: Optional[int] = None
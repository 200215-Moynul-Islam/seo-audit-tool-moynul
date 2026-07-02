from fastapi import APIRouter

from app.routers.health import router as health_router
from app.routers.audit import router as audit_router

router = APIRouter()

router.include_router(health_router)
router.include_router(audit_router)
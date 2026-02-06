from fastapi import APIRouter
from datetime import datetime
from app.schemas.health import HealthResponse
from app.core.config import settings

router = APIRouter()

@router.get(
    "/health",
    response_model=HealthResponse,
    summary="Health Check",
    description="Verifica el estado de la API y retorna información básica del servicio.",
    tags=["Health"]
)
async def health_check():
    """
    Endpoint de health check para verificar que la API está funcionando correctamente.
    
    Returns:
        HealthResponse: Estado actual de la API
    """
    return HealthResponse(
        status="healthy",
        message="API is running successfully",
        timestamp=datetime.now(),
        version=settings.APP_VERSION,
        environment=settings.ENVIRONMENT
    )

@router.get(
    "/",
    summary="Root Endpoint",
    description="Endpoint raíz de la API",
    tags=["Health"]
)
async def root():
    """
    Endpoint raíz que retorna información básica de la API.
    """
    return {
        "name": settings.APP_NAME,
        "version": settings.APP_VERSION,
        "description": settings.APP_DESCRIPTION,
        "documentation": "/docs",
        "health": "/api/v1/health"
    }
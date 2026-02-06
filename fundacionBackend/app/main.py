"""
Aplicación principal de FastAPI para Fundación Esperanza.

Este módulo configura y ejecuta la API principal del backend.
"""

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.core.config import settings
from app.api.v1 import api_router

# Crear instancia de la aplicación
app = FastAPI(
    title=settings.APP_NAME,
    description=settings.APP_DESCRIPTION,
    version=settings.APP_VERSION,
    docs_url="/docs",
    redoc_url="/redoc",
    openapi_url="/openapi.json"
)

# Configurar CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.BACKEND_CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Incluir rutas de la API v1
app.include_router(
    api_router,
    prefix=settings.API_V1_PREFIX
)

# Root endpoint
@app.get("/", tags=["Root"])
async def root():
    """
    Endpoint raíz de la aplicación.
    
    Retorna información básica sobre la API.
    """
    return {
        "name": settings.APP_NAME,
        "version": settings.APP_VERSION,
        "description": settings.APP_DESCRIPTION,
        "environment": settings.ENVIRONMENT,
        "documentation": {
            "swagger": "/docs",
            "redoc": "/redoc",
            "openapi": "/openapi.json"
        },
        "api": {
            "v1": settings.API_V1_PREFIX
        }
    }

# Event handlers
@app.on_event("startup")
async def startup_event():
    """
    Acciones a ejecutar al iniciar la aplicación.
    
    Futuras implementaciones:
    - Inicializar conexión a base de datos
    - Cargar datos iniciales
    - Verificar servicios externos
    """
    print(f"🚀 Starting {settings.APP_NAME} v{settings.APP_VERSION}")
    print(f"📝 Environment: {settings.ENVIRONMENT}")
    print(f"📚 Documentation available at /docs")

@app.on_event("shutdown")
async def shutdown_event():
    """
    Acciones a ejecutar al cerrar la aplicación.
    
    Futuras implementaciones:
    - Cerrar conexiones a base de datos
    - Limpiar recursos
    """
    print(f"👋 Shutting down {settings.APP_NAME}")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(
        "app.main:app",
        host="0.0.0.0",
        port=8000,
        reload=settings.DEBUG
    )
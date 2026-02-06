"""
Inicialización de rutas de la API v1.

Este módulo centraliza todas las rutas de la versión 1 de la API.
"""

from fastapi import APIRouter
from app.api.v1.routes import health

# Futuras importaciones de rutas
# from app.api.v1.routes import contact, donations, programs

api_router = APIRouter()

# Registrar rutas
api_router.include_router(
    health.router,
    tags=["Health"]
)

# Futuras rutas a agregar:
# 
# api_router.include_router(
#     contact.router,
#     prefix="/contact",
#     tags=["Contact"]
# )
# 
# api_router.include_router(
#     donations.router,
#     prefix="/donations",
#     tags=["Donations"]
# )
# 
# api_router.include_router(
#     programs.router,
#     prefix="/programs",
#     tags=["Programs"]
# )
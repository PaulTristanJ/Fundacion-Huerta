from pydantic_settings import BaseSettings
from typing import List

class Settings(BaseSettings):
    """
    Configuración de la aplicación.
    
    Las variables se cargan desde el archivo .env o variables de entorno del sistema.
    """
    
    # Información de la aplicación
    APP_NAME: str = "Fundación Esperanza API"
    APP_VERSION: str = "0.1.0"
    APP_DESCRIPTION: str = "API para la plataforma web de Fundación Esperanza"
    
    # Entorno
    ENVIRONMENT: str = "development"  # development, staging, production
    DEBUG: bool = True
    
    # API
    API_V1_PREFIX: str = "/api/v1"
    
    # CORS
    BACKEND_CORS_ORIGINS: List[str] = [
        "http://localhost:3000",  # Next.js development
        "http://localhost:8000",  # FastAPI development
        # Agregar dominios de producción después
    ]
    
    # Base de datos (futuro)
    # DATABASE_URL: str = "postgresql://user:password@localhost/fundacion_db"
    
    # Seguridad (futuro)
    # SECRET_KEY: str = "CHANGE_THIS_IN_PRODUCTION"
    # ALGORITHM: str = "HS256"
    # ACCESS_TOKEN_EXPIRE_MINUTES: int = 30
    
    # Pagos (futuro)
    # STRIPE_SECRET_KEY: str = ""
    # STRIPE_PUBLISHABLE_KEY: str = ""
    
    # Email (futuro)
    # SMTP_HOST: str = "smtp.gmail.com"
    # SMTP_PORT: int = 587
    # SMTP_USER: str = ""
    # SMTP_PASSWORD: str = ""
    # EMAILS_FROM_EMAIL: str = "noreply@fundacionesperanza.org"
    
    class Config:
        env_file = ".env"
        case_sensitive = True

settings = Settings()
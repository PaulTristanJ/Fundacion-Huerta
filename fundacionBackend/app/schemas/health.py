from pydantic import BaseModel
from datetime import datetime
from typing import Optional

class HealthResponse(BaseModel):
    """
    Schema para la respuesta del health check.
    """
    status: str
    message: str
    timestamp: datetime
    version: str
    environment: str
    
    class Config:
        json_schema_extra = {
            "example": {
                "status": "healthy",
                "message": "API is running",
                "timestamp": "2025-02-05T12:00:00",
                "version": "0.1.0",
                "environment": "development"
            }
        }

class MessageResponse(BaseModel):
    """
    Schema genérico para respuestas con mensaje.
    """
    message: str
    detail: Optional[str] = None
    
    class Config:
        json_schema_extra = {
            "example": {
                "message": "Operation successful",
                "detail": "Additional information"
            }
        }
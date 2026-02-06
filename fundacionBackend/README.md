# 🔧 Fundación Esperanza - Backend

API RESTful para la plataforma web de Fundación Esperanza construida con FastAPI.

## 🚀 Stack Tecnológico

- **Framework**: FastAPI
- **Servidor**: Uvicorn
- **Validación**: Pydantic
- **Lenguaje**: Python 3.10+

## 📁 Estructura del Proyecto

```
fundacion-backend/
├── app/
│   ├── api/
│   │   └── v1/
│   │       ├── routes/       # Endpoints de la API
│   │       └── __init__.py
│   ├── core/                 # Configuración y seguridad
│   ├── models/               # Modelos de DB (futuro)
│   ├── schemas/              # Schemas Pydantic
│   ├── services/             # Lógica de negocio (futuro)
│   └── main.py              # Aplicación principal
├── tests/                    # Tests unitarios e integración
├── .env                     # Variables de entorno
├── requirements.txt         # Dependencias
└── README.md
```

## 🛠️ Instalación y Desarrollo

### Prerrequisitos

- Python 3.10+
- pip
- virtualenv (recomendado)

### Instalación

```bash
# Crear entorno virtual
python -m venv venv

# Activar entorno virtual
# Windows
venv\Scripts\activate
# Linux/Mac
source venv/bin/activate

# Instalar dependencias
pip install -r requirements.txt

# Copiar archivo de entorno
cp .env.example .env
```

### Modo Desarrollo

```bash
# Ejecutar servidor con hot-reload
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

La API estará disponible en:
- **API**: `http://localhost:8000`
- **Documentación Swagger**: `http://localhost:8000/docs`
- **Documentación ReDoc**: `http://localhost:8000/redoc`

### Ejecutar Tests

```bash
pytest
```

## 📡 Endpoints Disponibles

### Health Check

```http
GET /api/v1/health
```

Retorna el estado de la API.

**Respuesta:**
```json
{
  "status": "healthy",
  "message": "API is running successfully",
  "timestamp": "2025-02-05T12:00:00",
  "version": "0.1.0",
  "environment": "development"
}
```

### Root

```http
GET /
```

Información básica de la API.

## 🔮 Endpoints Futuros

### Contacto

```http
POST /api/v1/contact
```

Enviar mensaje de contacto.

### Donaciones

```http
POST /api/v1/donations
GET /api/v1/donations/{id}
GET /api/v1/donations/user/{user_id}
```

Gestión de donaciones.

### Programas

```http
GET /api/v1/programs
GET /api/v1/programs/{id}
```

Información de programas.

### Autenticación

```http
POST /api/v1/auth/register
POST /api/v1/auth/login
POST /api/v1/auth/refresh
```

Sistema de autenticación.

## 🗄️ Base de Datos (Futuro)

Se implementará con:
- **ORM**: SQLAlchemy
- **Migraciones**: Alembic
- **DB**: PostgreSQL

### Modelos Planificados

- `User` - Usuarios y donadores
- `Donation` - Transacciones de donaciones
- `Program` - Programas de la fundación
- `ContactMessage` - Mensajes de contacto
- `DonationReceipt` - Recibos fiscales

## 🔐 Seguridad (Futuro)

### Autenticación
- JWT tokens
- Refresh tokens
- Password hashing con bcrypt

### Autorización
- Role-based access control (RBAC)
- Roles: admin, staff, donor, public

## 💳 Pagos (Futuro)

### Integración con Stripe

```python
# Ejemplo de endpoint futuro
@router.post("/donations/process")
async def process_donation(
    amount: int,
    payment_method: str,
    current_user: User = Depends(get_current_user)
):
    # Procesar pago con Stripe
    # Crear registro en DB
    # Enviar recibo por email
    pass
```

## 📧 Email (Futuro)

Funcionalidades planificadas:
- Confirmación de donaciones
- Recibos fiscales
- Newsletter
- Notificaciones administrativas

## 🔧 Configuración

### Variables de Entorno

Ver `.env.example` para todas las variables disponibles.

**Principales:**

```env
# Aplicación
ENVIRONMENT=development
DEBUG=true

# API
API_V1_PREFIX=/api/v1

# CORS
BACKEND_CORS_ORIGINS=http://localhost:3000
```

## 📊 Logging (Futuro)

Se implementará logging estructurado con:
- Diferentes niveles (DEBUG, INFO, WARNING, ERROR)
- Rotación de archivos
- Integración con servicios externos (Sentry, LogRocket)

## 🧪 Testing

### Estructura de Tests

```
tests/
├── test_health.py
├── test_contact.py      # Futuro
├── test_donations.py    # Futuro
└── conftest.py
```

### Ejecutar Tests

```bash
# Todos los tests
pytest

# Con coverage
pytest --cov=app

# Tests específicos
pytest tests/test_health.py
```

## 🚀 Deployment (Futuro)

### Docker

```dockerfile
# Dockerfile incluido en el proyecto
docker build -t fundacion-backend .
docker run -p 8000:8000 fundacion-backend
```

### Opciones de Deploy
- Heroku
- AWS (EC2, ECS, Lambda)
- Google Cloud Run
- DigitalOcean App Platform

## 🔄 Ciclo de Vida del Desarrollo

### Flujo de Trabajo

1. Crear rama feature: `git checkout -b feature/nueva-funcionalidad`
2. Desarrollar y hacer commits
3. Ejecutar tests: `pytest`
4. Push y crear Pull Request
5. Code review
6. Merge a main

### Convenciones

- **Commits**: Conventional Commits
- **Branches**: `feature/`, `bugfix/`, `hotfix/`
- **Code Style**: PEP 8

## 📝 Roadmap

### Fase 1 (Actual)
- ✅ Estructura base
- ✅ Health check
- ✅ Configuración CORS

### Fase 2
- [ ] Base de datos y modelos
- [ ] Endpoint de contacto
- [ ] Sistema de email

### Fase 3
- [ ] Autenticación y autorización
- [ ] CRUD de programas
- [ ] Panel administrativo

### Fase 4
- [ ] Integración de pagos
- [ ] Sistema de donaciones
- [ ] Recibos fiscales automáticos

### Fase 5
- [ ] Dashboard de donadores
- [ ] Reportes e informes
- [ ] Integración con CRM

## 🤝 Contribución

### Setup para Desarrollo

```bash
# Instalar dependencias de desarrollo
pip install -r requirements-dev.txt

# Pre-commit hooks
pre-commit install
```

### Lineamientos
- Documentar todos los endpoints
- Escribir tests para nueva funcionalidad
- Mantener cobertura de tests > 80%
- Seguir PEP 8

## 📞 Contacto

Para preguntas sobre el backend:
- Email: backend@fundacionesperanza.org
- Slack: #backend-dev

---

**Versión**: 0.1.0  
**Última actualización**: Febrero 2025
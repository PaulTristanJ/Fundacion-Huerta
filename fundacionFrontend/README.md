# Huerta Fundación de Aguascalientes - Sitio Web

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-14.1.0-black.svg)
![FastAPI](https://img.shields.io/badge/FastAPI-0.109.0-green.svg)

Sitio web oficial de la Huerta Fundación de Aguascalientes - Institución de Beneficencia Privada (I.B.P.)

**Lema:** _"Nutriendo el presente, Sembrando el futuro"_

---

## 📋 Tabla de Contenidos

- [Sobre el Proyecto](#sobre-el-proyecto)
- [Stack Tecnológico](#stack-tecnológico)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Instalación y Configuración](#instalación-y-configuración)
- [Desarrollo](#desarrollo)
- [Características Actuales](#características-actuales)
- [Roadmap y Futuras Integraciones](#roadmap-y-futuras-integraciones)
- [Diseño e Identidad Visual](#diseño-e-identidad-visual)
- [Licencia](#licencia)

---

## 🌳 Sobre el Proyecto

Este proyecto es el sitio web institucional de la Huerta Fundación de Aguascalientes, una organización sin fines de lucro dedicada a impulsar acciones de apoyo integral en salud, vivienda y bienestar para comunidades en situación de vulnerabilidad.

### Valores Fundamentales

- 🌱 **Solidaridad** - La raíz que nos sostiene
- 🤝 **Empatía** - Reconocemos las fibras humanas en cada historia
- 💪 **Compromiso** - Resistencia y firmeza como la madera de roble
- ✨ **Transparencia** - Cada recurso se maneja con ética
- 🔨 **Transformación** - Nuestra esencia maderera

---

## 🛠 Stack Tecnológico

### Frontend
- **Framework:** Next.js 14 (React 18)
- **Lenguaje:** JavaScript
- **Estilos:** Tailwind CSS
- **Node.js:** v18+

### Backend
- **Framework:** FastAPI (Python)
- **Servidor:** Uvicorn
- **Validación:** Pydantic

### Arquitectura
- **Tipo:** Arquitectura desacoplada (Frontend y Backend independientes)
- **API:** RESTful
- **Despliegue:** Frontend (Vercel/Netlify) + Backend (Railway/Render)

---

## 📁 Estructura del Proyecto

```
huerta-fundacion/
│
├── frontend/                    # Aplicación Next.js
│   ├── src/
│   │   ├── app/                # App Router de Next.js
│   │   │   ├── page.js         # Página de inicio
│   │   │   ├── sobre-nosotros/ # Sobre la fundación
│   │   │   ├── programas/      # Programas y causas
│   │   │   ├── como-ayudar/    # Donaciones y voluntariado
│   │   │   ├── contacto/       # Formulario de contacto
│   │   │   ├── layout.js       # Layout principal con nav y footer
│   │   │   └── globals.css     # Estilos globales
│   │   │
│   │   └── data/
│   │       └── foundation.js   # Datos de la fundación
│   │
│   ├── public/                 # Archivos públicos (imágenes, etc.)
│   ├── tailwind.config.js      # Configuración de Tailwind
│   └── package.json            # Dependencias del frontend
│
└── backend/                    # API con FastAPI
    ├── main.py                 # Aplicación principal
    ├── requirements.txt        # Dependencias de Python
    └── .env.example           # Variables de entorno (ejemplo)
```

---

## 🚀 Instalación y Configuración

### Prerrequisitos

- **Node.js** v18 o superior
- **Python** 3.9 o superior
- **npm** o **yarn**
- **pip** (gestor de paquetes de Python)

### Frontend (Next.js)

```bash
# Navegar al directorio del frontend
cd frontend

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# El sitio estará disponible en http://localhost:3000
```

### Backend (FastAPI)

```bash
# Navegar al directorio del backend
cd backend

# Crear entorno virtual (recomendado)
python -m venv venv

# Activar entorno virtual
# En Windows:
venv\Scripts\activate
# En Mac/Linux:
source venv/bin/activate

# Instalar dependencias
pip install -r requirements.txt

# Iniciar servidor de desarrollo
python main.py

# La API estará disponible en http://localhost:8000
# Documentación interactiva en http://localhost:8000/api/docs
```

---

## 💻 Desarrollo

### Scripts Disponibles (Frontend)

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build de producción
npm run start    # Iniciar servidor de producción
npm run lint     # Verificar código con ESLint
```

### Scripts Disponibles (Backend)

```bash
python main.py              # Iniciar servidor de desarrollo
uvicorn main:app --reload  # Alternativa con uvicorn
pytest                     # Ejecutar tests (cuando se implementen)
```

### Estructura de Rutas (Frontend)

- `/` - Página de inicio
- `/sobre-nosotros` - Historia y equipo
- `/programas` - Programas y causas
- `/como-ayudar` - Donaciones y voluntariado
- `/contacto` - Formulario de contacto

### Endpoints de la API (Backend)

```
GET  /                           # Información de la API
GET  /api/health                 # Health check
POST /api/contact                # Enviar mensaje de contacto
POST /api/volunteer/apply        # Solicitud de voluntariado
POST /api/donations/inquiry      # Consulta sobre donaciones
GET  /api/donations/methods      # Métodos de donación disponibles
GET  /api/programs               # Información de programas
GET  /api/impact                 # Estadísticas de impacto
POST /api/newsletter/subscribe   # Suscripción a newsletter
```

---

## ✨ Características Actuales

### ✅ Implementado

- [x] Diseño responsive y moderno
- [x] Página de inicio con hero impactante
- [x] Sección sobre la fundación (historia, equipo, valores)
- [x] Página de programas (Nutriendo el presente / Sembrando el futuro)
- [x] Página de cómo ayudar (donaciones, voluntariado)
- [x] Formulario de contacto
- [x] Navegación principal y footer
- [x] Identidad visual con colores orgánicos
- [x] API backend con FastAPI
- [x] Endpoints preparados para futuras integraciones
- [x] Sistema de estilos con Tailwind CSS personalizado

---

## 🗺 Roadmap y Futuras Integraciones

### Fase 2: Sistema de Donaciones (Q2 2024)

- [ ] Integración con PayPal
- [ ] Integración con Stripe
- [ ] Pasarela de transferencias bancarias
- [ ] Recibos fiscales automáticos
- [ ] Dashboard de donadores
- [ ] Historial de donaciones

### Fase 3: Gestión de Usuarios (Q3 2024)

- [ ] Sistema de autenticación
- [ ] Panel de administración
- [ ] Gestión de voluntarios
- [ ] Calendario de eventos
- [ ] Notificaciones por email

### Fase 4: Base de Datos (Q2 2024)

- [ ] PostgreSQL para datos transaccionales
- [ ] Sistema de backup automático
- [ ] Reportes y analytics
- [ ] CRM para donadores

### Fase 5: Contenido Dinámico (Q4 2024)

- [ ] CMS para gestionar contenido
- [ ] Blog de noticias y eventos
- [ ] Galería de fotos
- [ ] Testimonios de beneficiarios

### Futuras Mejoras

- [ ] PWA (Progressive Web App)
- [ ] Modo offline
- [ ] Multiidioma (Español/Inglés)
- [ ] Chatbot de atención
- [ ] Integración con redes sociales

---

## 🎨 Diseño e Identidad Visual

### Paleta de Colores

```css
/* Colores principales */
--color-primary: #5C4033   /* Café madera */
--color-secondary: #8B7355 /* Ocre */
--color-accent: #2D5016    /* Verde bosque */
--color-light: #F5F0E8     /* Beige claro */
--color-dark: #3E2723      /* Café oscuro */
```

### Tipografías

- **Display/Headings:** Crimson Pro (Google Fonts)
- **Body:** Work Sans (Google Fonts)

### Símbolo

El **Roble de los Fundadores** - Un roble que simboliza resistencia y estabilidad, integrando en su follaje los perfiles de los fundadores. Cada acción de la fundación es una "hoja nueva" que nace de raíces familiares sólidas.

### Principios de Diseño

1. **Natural y Orgánico** - Inspirado en la madera y la naturaleza
2. **Cálido y Confiable** - Colores tierra que transmiten solidez
3. **Profesional** - Diseño moderno que inspira confianza
4. **Accesible** - Responsive y fácil de navegar

---

## 📊 Decisiones Técnicas para Escalabilidad

### ¿Por qué esta arquitectura?

1. **Desacoplamiento:** Frontend y backend independientes permiten:
   - Escalar cada parte por separado
   - Cambiar tecnologías sin afectar todo el sistema
   - Múltiples frontends (web, móvil) usando la misma API

2. **Next.js:** Elegido por:
   - SEO optimizado (SSR/SSG)
   - Performance excepcional
   - Facilidad de despliegue
   - Gran ecosistema

3. **FastAPI:** Elegido por:
   - Alto rendimiento (async/await nativo)
   - Documentación automática (Swagger)
   - Validación de datos con Pydantic
   - Fácil integración con bases de datos

4. **Tailwind CSS:** Elegido por:
   - Desarrollo rápido
   - Personalización total
   - CSS optimizado en producción
   - Mantenibilidad

### Preparación para Futuro

El código actual está estructurado para facilitar:

1. **Integración de Pagos:**
   - Endpoints ya definidos en `/api/donations`
   - Modelos de datos preparados
   - Solo falta conectar con APIs de pago

2. **Autenticación:**
   - Middleware preparado en FastAPI
   - Estructura lista para JWT
   - Protección de rutas admin

3. **Base de Datos:**
   - Modelos Pydantic compatibles con ORMs
   - Fácil migración a SQLAlchemy/MongoDB
   - Estructura normalizada

---

## 📝 Licencia

Este proyecto es propiedad de **Huerta Fundación de Aguascalientes**.

**Institución de Beneficencia Privada (I.B.P.)**
Aguascalientes, México © 2024

---

## 📞 Contacto

- **Instagram:** [@huertafundacion](https://instagram.com/huertafundacion)
- **Facebook:** [Huerta Fundación](https://facebook.com/HuertaFundacion)
- **Ubicaciones:**
  - Centro de Acopio: Instalaciones de Tableros Bonaterra
  - Taller de Carpintería: Oficinas de IMJUVA

---

## 🙏 Agradecimientos

A todos los aliados, voluntarios y donadores que hacen posible la misión de la Huerta Fundación.

**"Nutriendo el presente, Sembrando el futuro"** 🌳

---

_Desarrollado con ❤️ para transformar vidas en Aguascalientes_
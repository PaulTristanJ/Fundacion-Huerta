# 🚀 Guía de Inicio Rápido - Fundación Esperanza

Esta guía te ayudará a poner en marcha el proyecto completo en menos de 10 minutos.

## 📋 Prerrequisitos

Asegúrate de tener instalado:

- **Node.js** 18 o superior ([Descargar](https://nodejs.org/))
- **Python** 3.10 o superior ([Descargar](https://python.org/))
- **npm** o **yarn** (viene con Node.js)
- **pip** (viene con Python)
- **Git** ([Descargar](https://git-scm.com/))

Verifica las instalaciones:
```bash
node --version  # v18.0.0 o superior
python --version  # 3.10.0 o superior
npm --version
pip --version
```

---

## 🎯 Instalación Rápida

### 1. Clonar el Repositorio (o descomprimir archivos)

```bash
# Si usas Git
git clone https://github.com/tu-org/fundacion-esperanza.git
cd fundacion-esperanza

# O simplemente navega a la carpeta donde están los archivos
```

### 2. Configurar el Backend (Terminal 1)

```bash
# Navegar a la carpeta del backend
cd fundacion-backend

# Crear entorno virtual
python -m venv venv

# Activar entorno virtual
# En Windows:
venv\Scripts\activate
# En Mac/Linux:
source venv/bin/activate

# Instalar dependencias
pip install -r requirements.txt

# Copiar archivo de entorno
cp .env.example .env

# Iniciar servidor
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

✅ **Backend corriendo en**: http://localhost:8000  
📚 **Documentación API**: http://localhost:8000/docs

### 3. Configurar el Frontend (Terminal 2)

```bash
# En una NUEVA terminal, navegar al frontend
cd fundacion-frontend

# Instalar dependencias
npm install

# Copiar archivo de entorno
cp .env.example .env.local

# Iniciar servidor de desarrollo
npm run dev
```

✅ **Frontend corriendo en**: http://localhost:3000

---

## ✨ ¡Listo!

Ahora puedes:

1. **Ver el sitio web**: Abre http://localhost:3000
2. **Explorar la API**: Abre http://localhost:8000/docs
3. **Navegar las páginas**:
   - Inicio: http://localhost:3000/
   - Sobre Nosotros: http://localhost:3000/sobre-nosotros
   - Programas: http://localhost:3000/programas
   - Donar: http://localhost:3000/donar
   - Contacto: http://localhost:3000/contacto

---

## 🔧 Comandos Útiles

### Frontend

```bash
# Desarrollo
npm run dev

# Build de producción
npm run build

# Iniciar build de producción
npm start

# Linter
npm run lint
```

### Backend

```bash
# Iniciar servidor (con hot-reload)
uvicorn app.main:app --reload

# Ejecutar tests (cuando estén implementados)
pytest

# Verificar formato de código
black app/
```

---

## 📂 Estructura del Proyecto

```
fundacion-esperanza/
├── fundacion-frontend/       # Aplicación Next.js
│   ├── src/
│   │   ├── app/             # Páginas (Next.js App Router)
│   │   ├── components/      # Componentes React
│   │   ├── config/          # Configuración
│   │   └── styles/          # Estilos
│   ├── public/              # Archivos estáticos
│   └── package.json
│
├── fundacion-backend/        # API FastAPI
│   ├── app/
│   │   ├── api/            # Endpoints
│   │   ├── core/           # Configuración
│   │   ├── schemas/        # Modelos Pydantic
│   │   └── main.py         # Entry point
│   └── requirements.txt
│
└── ARQUITECTURA_Y_VISION.md  # Documentación técnica
```

---

## 🎨 Personalización Inicial

### Cambiar Información de la Fundación

Edita: `fundacion-frontend/src/config/siteConfig.js`

```javascript
export const siteConfig = {
  name: "Tu Fundación",  // Cambiar aquí
  description: "Tu descripción",
  contact: {
    email: "contacto@tufundacion.org",  // Cambiar aquí
    phone: "...",
    address: "..."
  },
  // ... más configuraciones
}
```

### Cambiar Colores

Edita: `fundacion-frontend/tailwind.config.js`

```javascript
colors: {
  primary: {
    500: '#TU_COLOR',  // Color principal
    // ...
  }
}
```

### Agregar Imágenes

1. Coloca tus imágenes en: `fundacion-frontend/public/images/`
2. Referéncialas en los componentes

---

## 🐛 Problemas Comunes

### Puerto 3000 ya en uso

```bash
# Cambiar puerto del frontend
npm run dev -- -p 3001
```

### Puerto 8000 ya en uso

```bash
# Cambiar puerto del backend
uvicorn app.main:app --reload --port 8001
```

### Error de módulos no encontrados (Frontend)

```bash
cd fundacion-frontend
rm -rf node_modules package-lock.json
npm install
```

### Error de importación (Backend)

```bash
# Asegúrate de que el entorno virtual esté activado
# Windows:
venv\Scripts\activate
# Mac/Linux:
source venv/bin/activate

# Reinstalar dependencias
pip install -r requirements.txt
```

### Problemas con CORS

Si ves errores de CORS en la consola del navegador:

1. Verifica que el backend esté corriendo
2. Confirma las URLs en `.env.local` (frontend)
3. Revisa la configuración de CORS en `backend/app/main.py`

---

## 📝 Próximos Pasos

### 1. Agregar Contenido Real

- [ ] Reemplazar textos placeholder
- [ ] Agregar imágenes reales en `public/images/`
- [ ] Actualizar información de contacto
- [ ] Personalizar colores y tipografías

### 2. Configurar Deploy (Opcional para desarrollo)

**Frontend** (Vercel - Recomendado):
```bash
npm install -g vercel
vercel
```

**Backend** (Heroku):
```bash
heroku create fundacion-api
git push heroku main
```

### 3. Preparar para Producción

- [ ] Configurar dominio
- [ ] SSL/HTTPS
- [ ] Analytics
- [ ] Monitoreo de errores
- [ ] Backups

---

## 🆘 Ayuda y Soporte

### Documentación

- **Frontend**: Ver `fundacion-frontend/README.md`
- **Backend**: Ver `fundacion-backend/README.md`
- **Arquitectura**: Ver `ARQUITECTURA_Y_VISION.md`

### Recursos Útiles

- [Documentación Next.js](https://nextjs.org/docs)
- [Documentación FastAPI](https://fastapi.tiangolo.com/)
- [Documentación Tailwind CSS](https://tailwindcss.com/docs)

### Contacto

- Email: dev@fundacionesperanza.org
- Issues: [GitHub Issues](https://github.com/tu-org/fundacion-esperanza/issues)

---

## ✅ Checklist de Verificación

Antes de considerar que el setup está completo:

- [ ] Backend corriendo en http://localhost:8000
- [ ] Frontend corriendo en http://localhost:3000
- [ ] Puedo navegar todas las páginas
- [ ] La documentación de API funciona (/docs)
- [ ] No hay errores en la consola
- [ ] Los estilos se ven correctamente
- [ ] Las fuentes se cargan bien
- [ ] El diseño es responsive (probar en mobile)

---

## 🎉 ¡Todo Listo!

Ahora tienes una base sólida para desarrollar la plataforma web de tu fundación.

**Siguientes lecturas recomendadas**:
1. `ARQUITECTURA_Y_VISION.md` - Para entender cómo crecerá el proyecto
2. Frontend `README.md` - Guía detallada del frontend
3. Backend `README.md` - Guía detallada del backend

**¡Feliz desarrollo! 🚀**

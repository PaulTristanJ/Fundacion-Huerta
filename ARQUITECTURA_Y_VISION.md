# 🏗️ Arquitectura y Visión Futura - Fundación Esperanza

## 📋 Índice

1. [Arquitectura Actual](#arquitectura-actual)
2. [Decisiones de Diseño](#decisiones-de-diseño)
3. [Evolución Futura](#evolución-futura)
4. [Integración de Donaciones](#integración-de-donaciones)
5. [Panel de Donadores](#panel-de-donadores)
6. [Consideraciones de Escalabilidad](#consideraciones-de-escalabilidad)

---

## 🎯 Arquitectura Actual

### Separación de Responsabilidades

```
┌─────────────────────────────────────────────────────────┐
│                      USUARIO FINAL                       │
└────────────────────┬────────────────────────────────────┘
                     │
         ┌───────────┴───────────┐
         │                       │
    ┌────▼─────┐          ┌─────▼─────┐
    │ FRONTEND │          │  BACKEND  │
    │ Next.js  │◄────────►│  FastAPI  │
    │  (3000)  │   API    │   (8000)  │
    └──────────┘  Calls   └───────────┘
         │                       │
         │                       │
    ┌────▼─────┐          ┌─────▼─────────┐
    │ Static   │          │  Database     │
    │ Assets   │          │  (Futuro)     │
    └──────────┘          └───────────────┘
```

### Ventajas de esta Arquitectura

1. **Independencia**: Frontend y backend pueden desarrollarse en paralelo
2. **Escalabilidad**: Cada parte puede escalar independientemente
3. **Flexibilidad**: Fácil cambiar o actualizar una parte sin afectar la otra
4. **Testing**: Cada componente puede probarse de forma aislada
5. **Deploy**: Opciones múltiples de despliegue

---

## 🎨 Decisiones de Diseño

### Frontend

#### ¿Por qué Next.js?

- **SSR/SSG**: Mejor SEO y rendimiento inicial
- **Routing integrado**: No necesita React Router
- **API Routes**: Posibilidad de serverless functions
- **Image Optimization**: Optimización automática de imágenes
- **Developer Experience**: Hot reload, TypeScript soporte

#### ¿Por qué Tailwind CSS?

- **Utility-first**: Desarrollo rápido sin CSS custom
- **Consistencia**: Sistema de diseño incorporado
- **Performance**: CSS optimizado en producción
- **Responsive**: Mobile-first por defecto
- **Personalizable**: Fácil extender/modificar

#### Estructura de Componentes

```
components/
├── layout/        → Componentes estructurales (Header, Footer)
├── common/        → Componentes reutilizables (Button, Card)
├── home/          → Componentes específicos de página Home
├── programs/      → Componentes de programas
└── contact/       → Componentes de contacto
```

**Principio**: Cada componente debe ser:
- **Reutilizable**: Usado en múltiples lugares
- **Independiente**: No depender de contexto específico
- **Documentado**: Props y uso claros
- **Testeado**: (futuro) Con unit tests

### Backend

#### ¿Por qué FastAPI?

- **Performance**: Uno de los frameworks más rápidos de Python
- **Type Safety**: Validación automática con Pydantic
- **Documentación**: Swagger/OpenAPI automático
- **Async**: Soporte nativo para operaciones asíncronas
- **Modern**: Usa últimas features de Python

#### Estructura de Rutas

```
api/v1/
├── health.py       → Health checks
├── contact.py      → Mensajes de contacto (futuro)
├── donations.py    → Gestión de donaciones (futuro)
├── programs.py     → CRUD de programas (futuro)
└── auth.py         → Autenticación (futuro)
```

**Principio de Versionado**:
- `/api/v1/` → Versión 1 (actual)
- `/api/v2/` → Versión 2 (futuro) sin romper v1
- Permite evolución sin breaking changes

---

## 🔮 Evolución Futura

### Fase 1: Contenido Dinámico (1-2 meses)

**Objetivo**: Permitir gestión de contenido sin código

#### Implementaciones

1. **Base de Datos**
   ```python
   # models/program.py
   class Program(Base):
       id = Column(Integer, primary_key=True)
       title = Column(String)
       description = Column(Text)
       image_url = Column(String)
       is_active = Column(Boolean, default=True)
   ```

2. **Admin Panel**
   - CRUD de programas
   - Gestión de imágenes
   - Editor de textos

3. **Frontend Dinámico**
   ```javascript
   // Antes: Hardcoded en siteConfig.js
   const programs = siteConfig.programs
   
   // Después: Fetch desde API
   const { data: programs } = await fetch('/api/v1/programs')
   ```

### Fase 2: Sistema de Donaciones (2-3 meses)

**Objetivo**: Recibir donaciones en línea de forma segura

#### Arquitectura de Donaciones

```
┌──────────────┐
│   Usuario    │
└──────┬───────┘
       │ 1. Selecciona monto
       ▼
┌──────────────┐
│  Frontend    │
└──────┬───────┘
       │ 2. POST /api/v1/donations/create
       ▼
┌──────────────┐
│   Backend    │──────► 3. Valida datos
└──────┬───────┘
       │ 4. Crea Payment Intent
       ▼
┌──────────────┐
│   Stripe     │
└──────┬───────┘
       │ 5. Procesa pago
       ▼
┌──────────────┐
│   Backend    │──────► 6. Guarda en DB
└──────┬───────┘──────► 7. Envía recibo email
       │
       ▼
┌──────────────┐
│  Frontend    │──────► 8. Muestra confirmación
└──────────────┘
```

#### Implementación Backend

```python
# schemas/donation.py
class DonationCreate(BaseModel):
    amount: int  # En centavos
    currency: str = "MXN"
    donor_email: str
    donor_name: str
    is_recurring: bool = False
    program_id: Optional[int] = None

# routes/donations.py
@router.post("/donations/create")
async def create_donation(
    donation: DonationCreate,
    db: Session = Depends(get_db)
):
    # 1. Validar datos
    # 2. Crear Payment Intent en Stripe
    payment_intent = stripe.PaymentIntent.create(
        amount=donation.amount,
        currency=donation.currency,
        metadata={'donor_email': donation.donor_email}
    )
    
    # 3. Guardar en base de datos
    db_donation = Donation(**donation.dict())
    db_donation.stripe_payment_id = payment_intent.id
    db.add(db_donation)
    db.commit()
    
    # 4. Retornar client_secret para frontend
    return {
        "client_secret": payment_intent.client_secret,
        "donation_id": db_donation.id
    }
```

#### Implementación Frontend

```javascript
// app/donar/page.js
'use client'

import { loadStripe } from '@stripe/stripe-js'
import { Elements, PaymentElement } from '@stripe/react-stripe-js'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY)

export default function DonatePage() {
  const [clientSecret, setClientSecret] = useState('')
  
  const handleDonation = async (amount) => {
    // Crear intención de pago
    const response = await fetch('/api/v1/donations/create', {
      method: 'POST',
      body: JSON.stringify({ amount, donor_email, donor_name })
    })
    
    const { client_secret } = await response.json()
    setClientSecret(client_secret)
  }
  
  return (
    <Elements stripe={stripePromise} options={{ clientSecret }}>
      <PaymentForm />
    </Elements>
  )
}
```

### Fase 3: Panel de Donadores (3-4 meses)

**Objetivo**: Dashboard personalizado para donadores

#### Funcionalidades

1. **Autenticación**
   ```
   /auth/login     → Iniciar sesión
   /auth/register  → Crear cuenta
   /auth/reset     → Recuperar contraseña
   ```

2. **Dashboard**
   ```
   /dashboard
   ├── /profile          → Editar perfil
   ├── /donations        → Historial de donaciones
   ├── /receipts         → Descargar recibos
   ├── /impact           → Ver impacto de donaciones
   └── /settings         → Configuración
   ```

3. **Características**
   - Historial completo de donaciones
   - Recibos fiscales descargables (PDF)
   - Gestión de donaciones recurrentes
   - Visualización de impacto personal
   - Certificados de donación

#### Arquitectura de Autenticación

```python
# Backend
from jose import JWTError, jwt
from passlib.context import CryptContext

# Hash passwords
pwd_context = CryptContext(schemes=["bcrypt"])

# Crear JWT
def create_access_token(data: dict):
    to_encode = data.copy()
    expire = datetime.utcnow() + timedelta(minutes=30)
    to_encode.update({"exp": expire})
    return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)

# Proteger rutas
@router.get("/donations/my-donations")
async def get_my_donations(
    current_user: User = Depends(get_current_user)
):
    return db.query(Donation).filter(
        Donation.user_id == current_user.id
    ).all()
```

```javascript
// Frontend
// middleware.js
export function middleware(request) {
  const token = request.cookies.get('access_token')
  
  if (!token && request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/auth/login', request.url))
  }
}
```

---

## 🔐 Integración de Donaciones

### Opciones de Pasarela de Pago

#### Stripe (Recomendado)

**Ventajas**:
- API moderna y bien documentada
- Soporte para donaciones recurrentes
- Manejo de 3D Secure
- Dashboard completo
- Webhooks confiables

**Costos**:
- 3.6% + $3 MXN por transacción
- Sin costos de setup

#### Mercado Pago

**Ventajas**:
- Popular en Latinoamérica
- Acepta OXXO, efectivo
- Integración con bancos locales

**Costos**:
- 5.19% + IVA por transacción

#### Conekta (Opción local México)

**Ventajas**:
- Empresa mexicana
- Soporte local
- OXXO, SPEI, tarjetas

**Costos**:
- 3.6% + $3 MXN

### Flujo de Donación Completo

```
1. Usuario selecciona monto
   ↓
2. Ingresa datos (nombre, email, tarjeta)
   ↓
3. Frontend envía a backend
   ↓
4. Backend valida y crea Payment Intent
   ↓
5. Usuario confirma pago (3D Secure si aplica)
   ↓
6. Webhook notifica éxito/fallo
   ↓
7. Backend actualiza DB
   ↓
8. Envía email de confirmación
   ↓
9. Genera recibo fiscal
   ↓
10. Frontend muestra página de agradecimiento
```

### Modelo de Datos

```python
class Donation(Base):
    __tablename__ = "donations"
    
    id = Column(Integer, primary_key=True)
    amount = Column(Integer)  # En centavos
    currency = Column(String, default="MXN")
    status = Column(String)  # pending, completed, failed, refunded
    
    # Donador
    user_id = Column(Integer, ForeignKey("users.id"), nullable=True)
    donor_name = Column(String)
    donor_email = Column(String)
    
    # Pago
    payment_method = Column(String)  # card, oxxo, spei
    stripe_payment_id = Column(String, unique=True)
    
    # Recurrencia
    is_recurring = Column(Boolean, default=False)
    recurring_interval = Column(String)  # monthly, yearly
    next_charge_date = Column(DateTime, nullable=True)
    
    # Destino
    program_id = Column(Integer, ForeignKey("programs.id"), nullable=True)
    
    # Fiscal
    receipt_number = Column(String, unique=True)
    receipt_url = Column(String, nullable=True)
    
    # Timestamps
    created_at = Column(DateTime, default=datetime.utcnow)
    completed_at = Column(DateTime, nullable=True)
```

---

## 📊 Panel de Donadores

### Componentes del Dashboard

#### 1. Resumen General

```jsx
// components/dashboard/DonationsSummary.jsx
export default function DonationsSummary({ stats }) {
  return (
    <div className="grid md:grid-cols-4 gap-6">
      <StatCard
        title="Total Donado"
        value={`$${stats.totalAmount.toLocaleString()}`}
        icon={<FiDollarSign />}
      />
      <StatCard
        title="Donaciones"
        value={stats.count}
        icon={<FiHeart />}
      />
      <StatCard
        title="Vidas Impactadas"
        value={stats.impactedLives}
        icon={<FiUsers />}
      />
      <StatCard
        title="Próxima Donación"
        value={stats.nextDonation}
        icon={<FiCalendar />}
      />
    </div>
  )
}
```

#### 2. Historial de Donaciones

```jsx
// components/dashboard/DonationsHistory.jsx
export default function DonationsHistory({ donations }) {
  return (
    <div className="space-y-4">
      {donations.map(donation => (
        <DonationCard
          key={donation.id}
          amount={donation.amount}
          date={donation.created_at}
          program={donation.program}
          receipt={donation.receipt_url}
        />
      ))}
    </div>
  )
}
```

#### 3. Visualización de Impacto

```jsx
// components/dashboard/ImpactVisualization.jsx
import { LineChart, BarChart } from 'recharts'

export default function ImpactVisualization({ impactData }) {
  return (
    <>
      <h3>Tu Impacto en el Tiempo</h3>
      <LineChart data={impactData.monthly} />
      
      <h3>Distribución por Programa</h3>
      <BarChart data={impactData.byProgram} />
    </>
  )
}
```

### API Endpoints para Dashboard

```python
# routes/users.py

@router.get("/users/me/stats")
async def get_my_stats(current_user: User = Depends(get_current_user)):
    """Estadísticas del usuario"""
    donations = db.query(Donation).filter(
        Donation.user_id == current_user.id
    ).all()
    
    return {
        "total_amount": sum(d.amount for d in donations),
        "count": len(donations),
        "impacted_lives": calculate_impact(donations),
        "next_donation": get_next_recurring_date(current_user.id)
    }

@router.get("/users/me/donations")
async def get_my_donations(
    current_user: User = Depends(get_current_user),
    skip: int = 0,
    limit: int = 50
):
    """Historial de donaciones"""
    return db.query(Donation).filter(
        Donation.user_id == current_user.id
    ).offset(skip).limit(limit).all()

@router.get("/users/me/impact")
async def get_my_impact(current_user: User = Depends(get_current_user)):
    """Datos de impacto para visualización"""
    donations = db.query(Donation).filter(
        Donation.user_id == current_user.id
    ).all()
    
    return {
        "monthly": group_by_month(donations),
        "by_program": group_by_program(donations),
        "cumulative": calculate_cumulative(donations)
    }
```

---

## 🚀 Consideraciones de Escalabilidad

### Performance

#### Frontend

1. **Image Optimization**
   ```javascript
   // Usar Next.js Image
   import Image from 'next/image'
   
   <Image
     src="/hero.jpg"
     width={1200}
     height={600}
     alt="Hero"
     priority // Para above-the-fold
   />
   ```

2. **Code Splitting**
   ```javascript
   // Lazy loading de componentes
   const DonationForm = dynamic(() => import('@/components/DonationForm'))
   ```

3. **Caching**
   ```javascript
   // Revalidate data cada hora
   export const revalidate = 3600
   ```

#### Backend

1. **Database Indexing**
   ```python
   # Índices en columnas frecuentemente consultadas
   class Donation(Base):
       user_id = Column(Integer, ForeignKey("users.id"), index=True)
       created_at = Column(DateTime, index=True)
   ```

2. **Caching con Redis**
   ```python
   from redis import Redis
   
   redis_client = Redis(host='localhost', port=6379)
   
   @router.get("/programs")
   async def get_programs():
       # Intentar obtener del cache
       cached = redis_client.get("programs")
       if cached:
           return json.loads(cached)
       
       # Si no está en cache, consultar DB
       programs = db.query(Program).all()
       
       # Guardar en cache por 1 hora
       redis_client.setex("programs", 3600, json.dumps(programs))
       
       return programs
   ```

3. **Background Tasks**
   ```python
   from fastapi import BackgroundTasks
   
   @router.post("/donations/create")
   async def create_donation(
       donation: DonationCreate,
       background_tasks: BackgroundTasks
   ):
       # Procesar pago inmediatamente
       result = process_payment(donation)
       
       # Enviar email en background
       background_tasks.add_task(send_receipt_email, donation)
       
       return result
   ```

### Monitoring

#### Herramientas Recomendadas

1. **Application Performance**
   - New Relic
   - DataDog
   - Sentry (errores)

2. **Infrastructure**
   - Prometheus + Grafana
   - CloudWatch (AWS)

3. **User Analytics**
   - Google Analytics
   - Mixpanel
   - Hotjar

---

## 📈 Próximos Pasos Recomendados

### Semana 1-2: Setup y Contenido
- [ ] Agregar imágenes reales
- [ ] Completar textos y contenido
- [ ] Configurar analytics
- [ ] Setup de dominio y hosting

### Semana 3-4: Base de Datos
- [ ] Diseñar schema de DB
- [ ] Implementar modelos
- [ ] Crear migraciones
- [ ] Seed de datos iniciales

### Mes 2: Sistema de Contacto
- [ ] Endpoint de contacto
- [ ] Integración con email
- [ ] Formulario funcional
- [ ] Notificaciones admin

### Mes 3: Donaciones
- [ ] Cuenta en Stripe
- [ ] Implementar endpoints
- [ ] Integrar frontend
- [ ] Testing de pagos
- [ ] Webhooks

### Mes 4: Autenticación
- [ ] Sistema de usuarios
- [ ] Login/Register
- [ ] Reset password
- [ ] Protección de rutas

### Mes 5: Panel Donadores
- [ ] Dashboard layout
- [ ] Historial
- [ ] Recibos PDF
- [ ] Visualizaciones

---

## 🎯 Conclusión

Esta arquitectura está diseñada para:

1. **Crecer progresivamente** sin necesidad de reescrituras
2. **Mantener simplicidad** en las etapas iniciales
3. **Escalar** cuando sea necesario
4. **Facilitar mantenimiento** con código limpio y documentado

Cada decisión tomada permite evolucionar el proyecto sin crear deuda técnica, manteniendo un balance entre necesidades inmediatas y visión a largo plazo.

---

**Documento vivo**: Este archivo debe actualizarse conforme el proyecto evoluciona.

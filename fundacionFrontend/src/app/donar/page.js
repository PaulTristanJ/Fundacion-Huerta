import Button from '@/components/common/Button'
import Card from '@/components/common/Card'
import { FiCreditCard, FiDollarSign, FiCalendar, FiHeart, FiInfo } from 'react-icons/fi'

export const metadata = {
    title: 'Cómo Ayudar',
    description: 'Contribuye a nuestra misión y transforma vidas con tu donación.',
}

export default function DonatePage() {
    const amounts = [
        { value: 100, impact: "Material escolar para 2 niños" },
        { value: 500, impact: "Consulta médica para 5 familias" },
        { value: 1000, impact: "Beca mensual para 1 estudiante" },
        { value: 2500, impact: "Taller de emprendimiento" },
    ]

    const donationMethods = [
        {
            icon: <FiCreditCard className="h-8 w-8" />,
            title: "Donación Única",
            description: "Realiza un aporte puntual del monto que desees."
        },
        {
            icon: <FiCalendar className="h-8 w-8" />,
            title: "Donación Recurrente",
            description: "Conviértete en donador mensual y genera impacto sostenido."
        },
        {
            icon: <FiDollarSign className="h-8 w-8" />,
            title: "Donación en Especie",
            description: "Aporta materiales, equipamiento o servicios profesionales."
        },
    ]

    const benefits = [
        "Deducible de impuestos",
        "Certificado de donación",
        "Informes de impacto trimestrales",
        "Reconocimiento en memorias anuales",
        "Invitación a eventos especiales"
    ]

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
                <div className="container-custom">
                    <div className="mx-auto max-w-3xl text-center">
                        <h1 className="mb-6 text-display-md font-bold text-neutral-900 md:text-display-lg">
                            Transforma Vidas con tu Donación
                        </h1>
                        <p className="text-xl text-neutral-600">
                            Cada aporte cuenta. Tu generosidad hace posible que sigamos llevando
                            esperanza y oportunidades a quienes más lo necesitan.
                        </p>
                    </div>
                </div>
            </section>

            {/* Formas de donar */}
            <section className="section-padding">
                <div className="container-custom">
                    <h2 className="mb-12 text-center text-display-sm font-bold text-neutral-900">
                        Formas de Contribuir
                    </h2>

                    <div className="grid gap-8 md:grid-cols-3">
                        {donationMethods.map((method, index) => (
                            <Card key={index} className="text-center">
                                <div className="mb-4 inline-flex rounded-full bg-primary-100 p-4 text-primary-600">
                                    {method.icon}
                                </div>
                                <h3 className="mb-3 font-display text-xl font-semibold text-neutral-900">
                                    {method.title}
                                </h3>
                                <p className="text-neutral-600">
                                    {method.description}
                                </p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Formulario de donación (placeholder) */}
            <section className="bg-neutral-50 section-padding">
                <div className="container-custom">
                    <div className="mx-auto max-w-3xl">
                        <Card>
                            <div className="mb-6 text-center">
                                <h2 className="mb-2 text-display-sm font-bold text-neutral-900">
                                    Realiza tu Donación
                                </h2>
                                <p className="text-neutral-600">
                                    Selecciona el monto y forma de pago
                                </p>
                            </div>

                            {/* NOTA: Esta es solo la UI. La integración de pagos se agregará después */}
                            <div className="space-y-6">
                                {/* Selector de monto */}
                                <div>
                                    <label className="label">
                                        Selecciona o ingresa un monto
                                    </label>
                                    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                                        {amounts.map((amount) => (
                                            <button
                                                key={amount.value}
                                                className="rounded-lg border-2 border-neutral-300 p-4 text-center transition-all hover:border-primary-600 hover:bg-primary-50 focus:border-primary-600 focus:bg-primary-50"
                                            >
                                                <div className="font-bold text-primary-600">
                                                    ${amount.value.toLocaleString()}
                                                </div>
                                                <div className="mt-1 text-xs text-neutral-600">
                                                    {amount.impact}
                                                </div>
                                            </button>
                                        ))}
                                    </div>

                                    <div className="mt-4">
                                        <input
                                            type="number"
                                            placeholder="O ingresa otro monto"
                                            className="input"
                                            disabled
                                        />
                                    </div>
                                </div>

                                {/* Tipo de donación */}
                                <div>
                                    <label className="label">Tipo de donación</label>
                                    <div className="grid gap-4 md:grid-cols-2">
                                        <button className="rounded-lg border-2 border-primary-600 bg-primary-50 p-4 text-left transition-all">
                                            <div className="font-semibold text-primary-600">
                                                Donación Única
                                            </div>
                                            <div className="text-sm text-neutral-600">
                                                Aporte puntual
                                            </div>
                                        </button>
                                        <button className="rounded-lg border-2 border-neutral-300 p-4 text-left transition-all hover:border-primary-600 hover:bg-primary-50">
                                            <div className="font-semibold text-neutral-900">
                                                Donación Mensual
                                            </div>
                                            <div className="text-sm text-neutral-600">
                                                Impacto sostenido
                                            </div>
                                        </button>
                                    </div>
                                </div>

                                {/* Información del donador */}
                                <div className="grid gap-4 md:grid-cols-2">
                                    <div>
                                        <label className="label">Nombre completo</label>
                                        <input
                                            type="text"
                                            placeholder="Tu nombre"
                                            className="input"
                                            disabled
                                        />
                                    </div>
                                    <div>
                                        <label className="label">Correo electrónico</label>
                                        <input
                                            type="email"
                                            placeholder="tu@email.com"
                                            className="input"
                                            disabled
                                        />
                                    </div>
                                </div>

                                {/* Aviso */}
                                <div className="rounded-lg bg-primary-50 p-4 text-sm text-primary-900">
                                    <div className="mb-2 flex items-center gap-2 font-semibold">
                                        <FiInfo />
                                        Funcionalidad en desarrollo
                                    </div>
                                    <p>
                                        El sistema de donaciones en línea se integrará próximamente.
                                        Por ahora, puedes contactarnos directamente para realizar tu donación.
                                    </p>
                                </div>

                                {/* Botón deshabilitado */}
                                <Button variant="primary" size="lg" className="w-full" disabled>
                                    <FiHeart />
                                    Completar Donación
                                </Button>

                                {/* Contacto alternativo */}
                                <div className="text-center">
                                    <p className="mb-4 text-sm text-neutral-600">
                                        O contáctanos directamente:
                                    </p>
                                    <Button variant="outline" href="/contacto">
                                        Ir a Contacto
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Beneficios para donadores */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className="mb-6 text-display-sm font-bold text-neutral-900">
                            Beneficios para Donadores
                        </h2>
                        <p className="mb-12 text-lg text-neutral-600">
                            Como agradecimiento a tu generosidad, ofrecemos:
                        </p>

                        <div className="grid gap-4 text-left md:grid-cols-2">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="flex items-center gap-3 rounded-lg bg-neutral-50 p-4">
                                    <div className="flex-shrink-0 rounded-full bg-primary-100 p-2">
                                        <FiHeart className="h-5 w-5 text-primary-600" />
                                    </div>
                                    <span className="text-neutral-700">{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Transparencia */}
            <section className="bg-gradient-to-br from-primary-600 to-secondary-600 section-padding">
                <div className="container-custom">
                    <div className="mx-auto max-w-3xl text-center text-white">
                        <h2 className="mb-6 text-display-sm font-bold">
                            Transparencia Total
                        </h2>
                        <p className="mb-8 text-lg text-primary-100">
                            Somos una organización auditada y certificada. Cada peso donado
                            se destina directamente a nuestros programas y beneficiarios.
                        </p>
                        <div className="grid gap-8 md:grid-cols-3">
                            <div>
                                <div className="mb-2 text-4xl font-bold">85%</div>
                                <div className="text-primary-100">Programas directos</div>
                            </div>
                            <div>
                                <div className="mb-2 text-4xl font-bold">10%</div>
                                <div className="text-primary-100">Operación</div>
                            </div>
                            <div>
                                <div className="mb-2 text-4xl font-bold">5%</div>
                                <div className="text-primary-100">Recaudación</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
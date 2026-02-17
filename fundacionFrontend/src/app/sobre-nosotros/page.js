import Button from '@/components/common/Button'
import { FiAward, FiUsers, FiHeart, FiTarget } from 'react-icons/fi'

export const metadata = {
    title: 'Sobre Nosotros',
    description: 'Conoce la historia y misión de Huerta Fundación de Aguascalientes.',
}

export default function AboutPage() {
    const timeline = [
        { year: "Orígenes", event: "Entregas familiares de cenas navideñas, cobijas y ropa a migrantes en Guadalajara" },
        { year: "Formación", event: "Luis Angel Huerta se forma en valores maristas y realiza servicio social en FM4 Paso Libre" },
        { year: "2024", event: "Constitución legal como Institución de Beneficencia Privada en Aguascalientes" },
        { year: "2024", event: "Primera Gala Subasta en colaboración con Universidad Panamericana y DIF Estatal" },
        { year: "2024", event: "Firma de más de 15 convenios estratégicos con instituciones públicas y privadas" },
        { year: "Actualidad", event: "Operaciones permanentes con impacto en salud, vivienda y educación técnica" },
    ]

    const valores = [
        {
            icon: <FiHeart className="h-8 w-8" />,
            title: "Solidaridad",
            description: "La raíz que nos sostiene; un compromiso inquebrantable con el bienestar del otro."
        },
        {
            icon: <FiUsers className="h-8 w-8" />,
            title: "Empatía",
            description: "La capacidad de reconocer las fibras humanas en cada historia de vida."
        },
        {
            icon: <FiTarget className="h-8 w-8" />,
            title: "Compromiso",
            description: "Resistencia y firmeza, como la madera de roble, para no claudicar ante los retos sociales."
        },
        {
            icon: <FiAward className="h-8 w-8" />,
            title: "Transparencia",
            description: "El barniz que protege nuestra integridad; cada recurso se maneja con ética y rendición de cuentas."
        },
    ]

    const logros = [
        "Consolidación de la Gala Subasta anual en colaboración con Universidad Panamericana y DIF Estatal",
        "Firma de más de 15 convenios de colaboración estratégica",
        "Donación de equipo especializado para rehabilitación del Hospital Miguel Hidalgo (>$20,000 MXN)",
        "Rehabilitación y mantenimiento de la Casa de los Adolescentes Hombres del DIF Estatal",
        "Donación de madera para la construcción de la capilla de la Universidad Panamericana",
    ]

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
                <div className="container-custom">
                    <div className="mx-auto max-w-3xl text-center">
                        <h1 className="mb-6 text-display-md font-bold text-neutral-900 md:text-display-lg">
                            La Herencia del Roble
                        </h1>
                        <p className="text-xl text-neutral-600">
                            Lo que comenzó como entregas familiares de cenas navideñas se transformó en una
                            Institución de Beneficencia Privada que fusiona la eficiencia empresarial con el
                            corazón de la asistencia social.
                        </p>
                    </div>
                </div>
            </section>

            {/* Misión y Visión */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="grid gap-12 lg:grid-cols-2">
                        {/* Misión */}
                        <div className="rounded-2xl border-2 border-primary-200 bg-primary-50 p-8">
                            <div className="mb-4 text-5xl">🌱</div>
                            <h2 className="mb-4 text-2xl font-bold text-neutral-900">
                                Nutriendo el presente
                            </h2>
                            <p className="text-neutral-700">
                                Nos dedicamos a impulsar acciones de apoyo integral en salud, vivienda y bienestar
                                para comunidades en situación de vulnerabilidad. Nuestra misión es actuar como un
                                canal transparente que transforma la voluntad de ayudar en resultados tangibles,
                                devolviendo la dignidad a las familias hidrocálidas mediante una gestión eficiente
                                y humana de los recursos.
                            </p>
                        </div>

                        {/* Visión */}
                        <div className="rounded-2xl border-2 border-secondary-200 bg-secondary-50 p-8">
                            <div className="mb-4 text-5xl">🌳</div>
                            <h2 className="mb-4 text-2xl font-bold text-neutral-900">
                                Sembrando el futuro
                            </h2>
                            <p className="text-neutral-700">
                                Aspiramos a consolidarnos como una I.B.P. líder y sostenible que sirva de referente
                                para otras empresas familiares. Buscamos inspirar la transformación de recursos
                                privados en herramientas de cambio social, promoviendo la independencia y la calidad
                                de vida de nuestros beneficiarios a través de la educación y la capacitación técnica.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Valores */}
            <section className="bg-neutral-50 section-padding">
                <div className="container-custom">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-display-sm font-bold text-neutral-900">
                            La Herencia del Roble
                        </h2>
                        <p className="mx-auto max-w-2xl text-lg text-neutral-600">
                            Nuestros valores son las raíces que nos sostienen
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {valores.map((valor, index) => (
                            <div
                                key={index}
                                className="rounded-xl border border-neutral-200 bg-white p-6 transition-all hover:border-primary-300 hover:shadow-lg"
                            >
                                <div className="mb-4 inline-flex rounded-lg bg-primary-100 p-3 text-primary-600">
                                    {valor.icon}
                                </div>
                                <h3 className="mb-3 font-display text-xl font-semibold text-neutral-900">
                                    {valor.title}
                                </h3>
                                <p className="text-neutral-600">
                                    {valor.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Historia */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                        <div>
                            <h2 className="mb-6 text-display-sm font-bold text-neutral-900">
                                Nuestra Historia
                            </h2>
                            <div className="space-y-4 text-neutral-600">
                                <p>
                                    La vocación de servicio del Lic. Luis Angel Huerta Alatorre se forjó bajo el
                                    ejemplo de sus padres. Desde su infancia, lo que hoy es una fundación profesional
                                    comenzó como entregas familiares de cenas navideñas, cobijas y ropa a migrantes
                                    y personas en situación de calle, sembrando en él una sensibilidad social profunda.
                                </p>
                                <p>
                                    Su formación humanitaria se consolidó en el Instituto Marista y a través de su
                                    servicio social en FM4 Paso Libre en Guadalajara. Estas experiencias, sumadas a
                                    sus visitas constantes a la Ciudad de los Niños y hospitales durante el Día del
                                    Niño, le permitieron comprender que la filantropía requiere de una visión
                                    estratégica para ser verdaderamente transformadora.
                                </p>
                                <p>
                                    Al trasladar este legado a Aguascalientes, Luis Angel fusionó la eficiencia
                                    operativa de la empresa familiar (Letza y Tableros Bonaterra) con la asistencia
                                    social. Así nace la Fundación Huerta como una I.B.P., diseñada para ser un puente
                                    entre la iniciativa privada y las causas más urgentes del estado.
                                </p>
                            </div>
                        </div>

                        {/* Placeholder imagen */}
                        <div className="aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-primary-200 to-secondary-200 lg:aspect-auto lg:h-96">
                            <div className="flex h-full items-center justify-center text-neutral-600">
                                <div className="text-center">
                                    <FiUsers className="mx-auto mb-4 h-16 w-16" />
                                    <p>Imagen del equipo y fundador</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="bg-neutral-50 section-padding">
                <div className="container-custom">
                    <h2 className="mb-12 text-center text-display-sm font-bold text-neutral-900">
                        Nuestra Trayectoria
                    </h2>
                    <div className="mx-auto max-w-3xl">
                        {timeline.map((item, index) => (
                            <div key={index} className="relative mb-8 flex gap-6 pb-8 last:mb-0 last:pb-0">
                                {/* Línea vertical */}
                                {index !== timeline.length - 1 && (
                                    <div className="absolute left-6 top-12 h-full w-0.5 bg-primary-200" />
                                )}

                                {/* Año */}
                                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary-600 font-bold text-white">
                                    <FiAward />
                                </div>

                                {/* Contenido */}
                                <div className="flex-1">
                                    <div className="rounded-lg bg-white p-6 shadow-md">
                                        <div className="mb-2 font-display text-xl font-semibold text-primary-600">
                                            {item.year}
                                        </div>
                                        <p className="text-neutral-700">{item.event}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Logros */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-display-sm font-bold text-neutral-900">
                            Logros Principales
                        </h2>
                        <p className="mx-auto max-w-2xl text-lg text-neutral-600">
                            Resultados tangibles de nuestra gestión profesional
                        </p>
                    </div>

                    <div className="mx-auto max-w-3xl space-y-4">
                        {logros.map((logro, index) => (
                            <div
                                key={index}
                                className="flex items-start gap-4 rounded-xl border border-neutral-200 bg-white p-6 transition-shadow hover:shadow-lg"
                            >
                                <div className="flex-shrink-0 rounded-full bg-primary-100 p-2">
                                    <FiAward className="h-5 w-5 text-primary-600" />
                                </div>
                                <p className="text-neutral-700">{logro}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            <section className="bg-gradient-to-br from-primary-600 to-secondary-600 section-padding">
                <div className="container-custom">
                    <div className="mx-auto max-w-3xl text-center text-white">
                        <h2 className="mb-6 text-display-sm font-bold md:text-display-md text-white">
                            Liderazgo con Visión
                        </h2>
                        <p className="mb-6 text-xl text-primary-100">
                            <strong>Lic. Luis Angel Huerta Alatorre</strong> - Director General y Representante Legal
                        </p>
                        <p className="mb-8 text-lg text-primary-100">
                            Visionario y estratega, Luis Angel ha logrado posicionar a la fundación como un
                            actor clave en la asistencia social del estado. Formado en valores maristas y con
                            experiencia en atención al migrante, utiliza su posición en el sector privado para
                            movilizar recursos hacia las comunidades más olvidadas.
                        </p>
                        <Button variant="primary" size="lg" href="/contacto">
                            Conoce más de nuestro equipo
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}
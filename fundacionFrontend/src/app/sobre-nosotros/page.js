import Button from '@/components/common/Button'
import { FiAward, FiUsers, FiHeart, FiTarget } from 'react-icons/fi'
import Image from 'next/image'


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
                            El compromiso social de Luis Ángel Huerta Alatorre nació desde su infancia, al crecer en una familia que lo involucró activamente en acciones de ayuda y solidaridad.
                            Con el tiempo, esa enseñanza se convirtió en una convicción personal, participando en voluntariados, servicio social en distintos países y apoyando diferentes causas
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
                                    La vocación de servicio del Licenciado Luis Angel Huerta Alatorre se forjó bajo el ejemplo de sus padres. Desde su infancia, se vio interesado en ayudar al prójimo, lo que hoy es una fundación familiar comenzó como entregas de cenas navideñas, cobijas, ropa a migrantes y a personas en situación de calle.
                                </p>

                                <p>
                                    Su formación humanitaria se consolidó en la adolescencia cuando realizó voluntariado en Guadalajara en FM4 Paso Libre y posteriormente en Brasil, en Río de Janeiro, donde enseñó español a niños en un orfanatorio dentro de una favela.
                                </p>

                                <p>
                                    Al trasladar este legado a Aguascalientes, Luis Angel fusionó la eficiencia operativa de la empresa familiar con la asistencia social, creando Huerta Fundación de Aguascalientes como una I.B.P. que conecta a la iniciativa privada con las personas más vulnerables del estado.
                                </p>
                            </div>
                        </div>

                        {/* Imagen */}
                        <div className="aspect-square overflow-hidden rounded-2xl lg:aspect-full lg:h-90">
                            <Image
                                src="/images/huerta.png"
                                alt="Luis Angel Huerta Alatorre - Director de Huerta Fundación"
                                width={500}
                                height={700}
                                className="min-h-128 w-Full object-cover" />
                        </div>
                    </div>
                </div>
            </section>
        </div >
    )
}
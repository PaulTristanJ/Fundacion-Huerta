import Button from '@/components/common/Button'
import Card from '@/components/common/Card'
import { FiBook, FiHeart, FiTrendingUp, FiCheckCircle } from 'react-icons/fi'
import { siteConfig } from '@/config/siteConfig'

export const metadata = {
    title: 'Programas',
    description: 'Conoce nuestros programas de educación, salud y desarrollo comunitario.',
}

export default function ProgramsPage() {
    const programs = [
        {
            id: "educacion",
            icon: <FiBook className="h-12 w-12" />,
            title: "Educación para Todos",
            subtitle: "Acceso a educación de calidad",
            description: "Creemos que la educación es el pilar fundamental para el desarrollo. A través de nuestros programas educativos, brindamos oportunidades de aprendizaje a niños y jóvenes en comunidades vulnerables.",
            color: "primary",
            features: [
                "Becas escolares completas",
                "Material didáctico y útiles",
                "Tutorías personalizadas",
                "Talleres de habilidades digitales",
                "Orientación vocacional"
            ],
            impact: {
                number: "15,000+",
                label: "Estudiantes becados"
            }
        },
        {
            id: "salud",
            icon: <FiHeart className="h-12 w-12" />,
            title: "Salud Comunitaria",
            subtitle: "Bienestar para todos",
            description: "La salud es un derecho fundamental. Ofrecemos servicios de atención médica preventiva y campañas de salud en comunidades con acceso limitado a servicios de salud.",
            color: "red",
            features: [
                "Jornadas médicas gratuitas",
                "Campañas de vacunación",
                "Talleres de nutrición",
                "Atención dental básica",
                "Programas de salud mental"
            ],
            impact: {
                number: "30,000+",
                label: "Consultas realizadas"
            }
        },
        {
            id: "desarrollo",
            icon: <FiTrendingUp className="h-12 w-12" />,
            title: "Desarrollo Sostenible",
            subtitle: "Empoderamiento económico",
            description: "Promovemos el desarrollo económico local mediante capacitación en habilidades técnicas y emprendimiento, generando oportunidades de crecimiento sostenible.",
            color: "green",
            features: [
                "Capacitación técnica",
                "Asesoría para emprendedores",
                "Microcréditos productivos",
                "Talleres de finanzas personales",
                "Proyectos productivos comunitarios"
            ],
            impact: {
                number: "5,000+",
                label: "Familias beneficiadas"
            }
        }
    ]

    const colorClasses = {
        primary: {
            bg: "bg-primary-100",
            text: "text-primary-600",
            border: "border-primary-300",
            gradient: "from-primary-600 to-primary-800"
        },
        red: {
            bg: "bg-red-100",
            text: "text-red-600",
            border: "border-red-300",
            gradient: "from-red-600 to-red-800"
        },
        green: {
            bg: "bg-green-100",
            text: "text-green-600",
            border: "border-green-300",
            gradient: "from-green-600 to-green-800"
        }
    }

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
                <div className="container-custom">
                    <div className="mx-auto max-w-3xl text-center">
                        <h1 className="mb-6 text-display-md font-bold text-neutral-900 md:text-display-lg">
                            Nuestros Programas
                        </h1>
                        <p className="text-xl text-neutral-600">
                            Trabajamos en tres áreas fundamentales para generar un impacto integral
                            y sostenible en las comunidades que atendemos.
                        </p>
                    </div>
                </div>
            </section>

            {/* Programas Detallados */}
            {programs.map((program, index) => (
                <section
                    key={program.id}
                    id={program.id}
                    className={index % 2 === 0 ? "bg-white section-padding" : "bg-neutral-50 section-padding"}
                >
                    <div className="container-custom">
                        <div className={`grid gap-12 lg:grid-cols-2 lg:items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                            {/* Contenido */}
                            <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                                <div className={`mb-6 inline-flex rounded-2xl p-4 ${colorClasses[program.color].bg} ${colorClasses[program.color].text}`}>
                                    {program.icon}
                                </div>

                                <h2 className="mb-2 text-display-sm font-bold text-neutral-900">
                                    {program.title}
                                </h2>
                                <p className={`mb-6 text-lg font-medium ${colorClasses[program.color].text}`}>
                                    {program.subtitle}
                                </p>

                                <p className="mb-8 text-neutral-600">
                                    {program.description}
                                </p>

                                {/* Características */}
                                <div className="mb-8 space-y-3">
                                    {program.features.map((feature, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <FiCheckCircle className={`mt-0.5 h-5 w-5 flex-shrink-0 ${colorClasses[program.color].text}`} />
                                            <span className="text-neutral-700">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Impacto */}
                                <div className={`inline-flex items-center gap-4 rounded-lg border-2 ${colorClasses[program.color].border} bg-white px-6 py-4`}>
                                    <div>
                                        <div className={`text-3xl font-bold ${colorClasses[program.color].text}`}>
                                            {program.impact.number}
                                        </div>
                                        <div className="text-sm text-neutral-600">
                                            {program.impact.label}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Placeholder imagen */}
                            <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                                <div className={`aspect-square overflow-hidden rounded-2xl bg-gradient-to-br ${colorClasses[program.color].gradient} lg:aspect-auto lg:h-96`}>
                                    <div className="flex h-full items-center justify-center text-white">
                                        <div className="text-center">
                                            {program.icon}
                                            <p className="mt-4">Imagen del programa</p>
                                            <p className="text-sm opacity-80">Placeholder</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ))}

            {/* CTA Final */}
            <section className="bg-gradient-to-br from-primary-600 to-secondary-600 section-padding">
                <div className="container-custom text-center">
                    <h2 className="mb-6 text-display-sm font-bold text-white md:text-display-md">
                        Apoya nuestros programas
                    </h2>
                    <p className="mb-8 text-xl text-primary-100">
                        Tu donación hace posible que sigamos transformando vidas.
                    </p>
                    <Button variant="secondary" size="lg" href="/donar">
                        Hacer una donación
                    </Button>
                </div>
            </section>
        </div>
    )
}
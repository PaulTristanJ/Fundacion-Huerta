import Button from '@/components/common/Button'
import { FiAward, FiUsers, FiTarget, FiTrendingUp } from 'react-icons/fi'

export const metadata = {
    title: 'Sobre Nosotros',
    description: 'Conoce la historia, misión y visión de Fundación Esperanza.',
}

export default function AboutPage() {
    const timeline = [
        { year: "2009", event: "Fundación de la organización con 5 voluntarios" },
        { year: "2012", event: "Primer programa de becas educativas" },
        { year: "2015", event: "Expansión a 10 estados del país" },
        { year: "2018", event: "Inauguración de 3 centros comunitarios" },
        { year: "2022", event: "50,000 beneficiarios alcanzados" },
        { year: "2025", event: "Presencia en 120+ comunidades" },
    ]

    const team = [
        {
            role: "Dirección Ejecutiva",
            description: "Liderazgo estratégico y relaciones institucionales"
        },
        {
            role: "Programas Educativos",
            description: "Diseño e implementación de iniciativas de educación"
        },
        {
            role: "Salud Comunitaria",
            description: "Coordinación de campañas y servicios médicos"
        },
        {
            role: "Desarrollo y Fundraising",
            description: "Gestión de recursos y relaciones con donadores"
        },
    ]

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
                <div className="container-custom">
                    <div className="mx-auto max-w-3xl text-center">
                        <h1 className="mb-6 text-display-md font-bold text-neutral-900 md:text-display-lg">
                            Nuestra Historia
                        </h1>
                        <p className="text-xl text-neutral-600">
                            Desde 2009, trabajamos incansablemente para transformar vidas y construir
                            comunidades más justas, educadas y saludables.
                        </p>
                    </div>
                </div>
            </section>

            {/* Historia */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                        <div>
                            <h2 className="mb-6 text-display-sm font-bold text-neutral-900">
                                ¿Cómo comenzamos?
                            </h2>
                            <div className="space-y-4 text-neutral-600">
                                <p>
                                    Fundación Esperanza nació del sueño compartido de un grupo de profesionales
                                    comprometidos con el cambio social. Al visitar comunidades rurales, nos
                                    confrontamos con realidades que nos motivaron a actuar.
                                </p>
                                <p>
                                    Lo que comenzó como un pequeño programa de tutorías se ha convertido en
                                    una organización con presencia nacional, ofreciendo programas integrales
                                    de educación, salud y desarrollo económico.
                                </p>
                                <p>
                                    Hoy contamos con un equipo de más de 100 colaboradores y miles de
                                    voluntarios que comparten nuestra visión de un México más equitativo.
                                </p>
                            </div>
                        </div>

                        {/* Placeholder imagen */}
                        <div className="aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-primary-200 to-secondary-200 lg:aspect-auto lg:h-96">
                            <div className="flex h-full items-center justify-center text-neutral-600">
                                <div className="text-center">
                                    <FiUsers className="mx-auto mb-4 h-16 w-16" />
                                    <p>Imagen del equipo fundador</p>
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

            {/* Equipo */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-display-sm font-bold text-neutral-900">
                            Nuestro Equipo
                        </h2>
                        <p className="mx-auto max-w-2xl text-lg text-neutral-600">
                            Profesionales apasionados trabajando para hacer realidad nuestra misión.
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2">
                        {team.map((member, index) => (
                            <div
                                key={index}
                                className="rounded-xl border border-neutral-200 bg-white p-6 transition-shadow hover:shadow-lg"
                            >
                                <h3 className="mb-2 font-display text-xl font-semibold text-neutral-900">
                                    {member.role}
                                </h3>
                                <p className="text-neutral-600">{member.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-br from-primary-600 to-secondary-600 section-padding">
                <div className="container-custom text-center">
                    <h2 className="mb-6 text-display-sm font-bold text-white md:text-display-md">
                        Únete a nuestro equipo
                    </h2>
                    <p className="mb-8 text-xl text-primary-100">
                        Siempre buscamos personas comprometidas que quieran ser parte del cambio.
                    </p>
                    <Button variant="secondary" size="lg" href="/contacto">
                        Contáctanos
                    </Button>
                </div>
            </section>
        </div>
    )
}
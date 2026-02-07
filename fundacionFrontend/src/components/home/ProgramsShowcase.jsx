import Link from 'next/link'
import { FiBook, FiHeart, FiTrendingUp, FiArrowRight } from 'react-icons/fi'

export default function ProgramsShowcase() {
    const programs = [
        {
            id: "educacion",
            icon: <FiBook className="h-12 w-12" />,
            title: "Educación",
            subtitle: "El futuro comienza aquí",
            description: "Becas, materiales y tutorías para niños y jóvenes en comunidades vulnerables.",
            stats: "15,000+ estudiantes",
            gradient: "from-blue-500 to-primary-600",
            size: "large"
        },
        {
            id: "salud",
            icon: <FiHeart className="h-10 w-10" />,
            title: "Salud",
            subtitle: "Bienestar para todos",
            description: "Jornadas médicas y programas de prevención en zonas rurales.",
            stats: "30,000+ consultas",
            gradient: "from-red-500 to-pink-600",
            size: "small"
        },
        {
            id: "desarrollo",
            icon: <FiTrendingUp className="h-10 w-10" />,
            title: "Desarrollo",
            subtitle: "Comunidades sostenibles",
            description: "Capacitación y emprendimiento para el crecimiento económico local.",
            stats: "5,000+ familias",
            gradient: "from-green-500 to-emerald-600",
            size: "small"
        }
    ]

    return (
        <section className="bg-neutral-50 py-20">
            <div className="container-custom">
                <div className="mx-auto max-w-6xl">
                    {/* Header */}
                    <div className="mb-16 text-center">
                        <h2 className="mb-4 text-4xl font-bold text-neutral-900 md:text-5xl">
                            Áreas de impacto
                        </h2>
                        <p className="mx-auto max-w-2xl text-lg text-neutral-600">
                            Trabajamos en tres pilares fundamentales para crear cambio real y sostenible
                        </p>
                    </div>

                    {/* Grid asimétrico */}
                    <div className="grid gap-6 lg:grid-cols-2">
                        {/* Tarjeta grande (Educación) */}
                        <Link
                            href={`/programas#${programs[0].id}`}
                            className="group relative overflow-hidden rounded-3xl bg-white p-10 shadow-lg transition-all hover:-translate-y-2 hover:shadow-2xl lg:row-span-2"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${programs[0].gradient} opacity-0 transition-opacity group-hover:opacity-5`} />

                            <div className="relative">
                                <div className={`mb-6 inline-flex rounded-2xl bg-gradient-to-br ${programs[0].gradient} p-4 text-white`}>
                                    {programs[0].icon}
                                </div>

                                <h3 className="mb-2 text-3xl font-bold text-neutral-900">
                                    {programs[0].title}
                                </h3>
                                <p className="mb-4 text-lg font-medium text-neutral-600">
                                    {programs[0].subtitle}
                                </p>
                                <p className="mb-6 text-neutral-600">
                                    {programs[0].description}
                                </p>

                                <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-700">
                                    {programs[0].stats}
                                </div>

                                <div className="flex items-center gap-2 text-primary-600 transition-all group-hover:gap-3">
                                    <span className="font-medium">Conoce más</span>
                                    <FiArrowRight className="h-5 w-5" />
                                </div>
                            </div>
                        </Link>

                        {/* Tarjetas pequeñas (Salud y Desarrollo) */}
                        {programs.slice(1).map((program) => (
                            <Link
                                key={program.id}
                                href={`/programas#${program.id}`}
                                className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-lg transition-all hover:-translate-y-2 hover:shadow-2xl"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${program.gradient} opacity-0 transition-opacity group-hover:opacity-5`} />

                                <div className="relative">
                                    <div className={`mb-4 inline-flex rounded-xl bg-gradient-to-br ${program.gradient} p-3 text-white`}>
                                        {program.icon}
                                    </div>

                                    <h3 className="mb-2 text-2xl font-bold text-neutral-900">
                                        {program.title}
                                    </h3>
                                    <p className="mb-3 font-medium text-neutral-600">
                                        {program.subtitle}
                                    </p>
                                    <p className="mb-4 text-sm text-neutral-600">
                                        {program.description}
                                    </p>

                                    <div className="mb-4 text-sm font-medium text-neutral-500">
                                        {program.stats}
                                    </div>

                                    <div className="flex items-center gap-2 text-primary-600 transition-all group-hover:gap-3">
                                        <span className="text-sm font-medium">Ver más</span>
                                        <FiArrowRight className="h-4 w-4" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* CTA centrado */}
                    <div className="mt-12 text-center">
                        <Link
                            href="/programas"
                            className="inline-flex items-center gap-2 text-lg font-medium text-primary-600 transition-all hover:gap-3"
                        >
                            Ver todos los programas
                            <FiArrowRight className="h-5 w-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
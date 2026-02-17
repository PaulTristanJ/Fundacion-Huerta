import Link from 'next/link'
import { FiHeart, FiHome, FiTool, FiArrowRight } from 'react-icons/fi'

export default function ProgramsShowcase() {
    const programs = [
        {
            id: "salud",
            icon: <FiHeart className="h-12 w-12" />,
            title: "Brigadas de Salud",
            subtitle: "Atención médica gratuita",
            description: "Pruebas de VIH y Hepatitis C, medicina general, fisioterapia y medicamentos sin costo en alianza con Grupo Cava y DIF Municipal.",
            stats: "+1,000 pruebas realizadas",
            gradient: "from-red-500 to-pink-600",
            size: "large"
        },
        {
            id: "vivienda",
            icon: <FiHome className="h-10 w-10" />,
            title: "Vivienda Digna",
            subtitle: "Techos seguros",
            description: "Donación e instalación de láminas y maderas donadas por Letza para familias vulnerables.",
            stats: "+80 familias protegidas",
            gradient: "from-blue-500 to-primary-600",
            size: "small"
        },
        {
            id: "carpinteria",
            icon: <FiTool className="h-10 w-10" />,
            title: "Taller de Carpintería",
            subtitle: "Formación técnica",
            description: "Capacitación gratuita en IMJUVA con 100% de materia prima donada para jóvenes de 15 a 29 años.",
            stats: "+25 alumnos activos",
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
                            Nuestros Programas
                        </h2>
                        <p className="mx-auto max-w-2xl text-lg text-neutral-600">
                            Nutriendo el presente y sembrando el futuro a través de acciones concretas
                        </p>
                    </div>

                    {/* Grid asimétrico */}
                    <div className="grid gap-6 lg:grid-cols-2">
                        {/* Tarjeta grande (Salud) */}
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

                                <div className="flex items-center gap-2 text-pink-600 transition-all group-hover:gap-3">
                                    <span className="font-medium">Conoce más</span>
                                    <FiArrowRight className="h-5 w-5" />
                                </div>
                            </div>
                        </Link>

                        {/* Tarjetas pequeñas (Vivienda y Carpintería) */}
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
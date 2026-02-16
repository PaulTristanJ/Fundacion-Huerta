import { FiUsers, FiHeart, FiTrendingUp, FiAward } from 'react-icons/fi'

export default function ImpactSection() {
    const impacts = [
        {
            icon: <FiHeart className="h-8 w-8" />,
            number: "+1,000",
            label: "Pruebas de salud gratuitas",
            color: "red"
        },
        {
            icon: <FiUsers className="h-8 w-8" />,
            number: "+80",
            label: "Familias con vivienda digna",
            color: "blue"
        },
        {
            icon: <FiTrendingUp className="h-8 w-8" />,
            number: "+25",
            label: "Alumnos en capacitación",
            color: "green"
        },
        {
            icon: <FiAward className="h-8 w-8" />,
            number: "+15",
            label: "Convenios estratégicos",
            color: "yellow"
        }
    ]

    const colorClasses = {
        blue: "from-blue-500 to-primary-600",
        red: "from-red-500 to-pink-600",
        green: "from-green-500 to-emerald-600",
        yellow: "from-yellow-500 to-orange-600"
    }

    return (
        <section className="py-20">
            <div className="container-custom">
                <div className="mx-auto max-w-6xl">
                    {/* Título centrado */}
                    <div className="mb-16 text-center">
                        <h2 className="mb-4 text-4xl font-bold text-neutral-900 md:text-5xl">
                            Nuestro impacto en números
                        </h2>
                        <p className="mx-auto max-w-2xl text-lg text-neutral-600">
                            Cada cifra representa una historia de esperanza y transformación en Aguascalientes
                        </p>
                    </div>

                    {/* Grid de impacto */}
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {impacts.map((impact, index) => (
                            <div
                                key={index}
                                className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all hover:-translate-y-2 hover:shadow-2xl"
                            >
                                {/* Gradiente de fondo */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${colorClasses[impact.color]} opacity-0 transition-opacity group-hover:opacity-10`} />

                                {/* Contenido */}
                                <div className="relative">
                                    <div className={`mb-4 inline-flex rounded-xl bg-gradient-to-br ${colorClasses[impact.color]} p-3 text-white`}>
                                        {impact.icon}
                                    </div>
                                    <div className="mb-2 text-3xl font-bold text-neutral-900">
                                        {impact.number}
                                    </div>
                                    <div className="text-sm font-medium text-neutral-600">
                                        {impact.label}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
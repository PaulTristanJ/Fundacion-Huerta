export default function StatsSection() {
    const stats = [
        {
            number: "15,000+",
            label: "Niños educados",
            description: "Acceso a educación de calidad"
        },
        {
            number: "30,000+",
            label: "Consultas médicas",
            description: "Atención de salud preventiva"
        },
        {
            number: "5,000+",
            label: "Familias beneficiadas",
            description: "Programas de desarrollo"
        },
        {
            number: "120+",
            label: "Comunidades",
            description: "En 12 estados del país"
        }
    ]

    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 to-primary-800 section-padding">
            {/* Elemento decorativo */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-white blur-3xl" />
                <div className="absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-white blur-3xl" />
            </div>

            <div className="container-custom relative">
                {/* Encabezado */}
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-display-sm font-bold text-white md:text-display-md">
                        Nuestro Impacto
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-primary-100">
                        Cada número representa vidas transformadas y sueños cumplidos.
                        Estos son los resultados de nuestro trabajo conjunto.
                    </p>
                </div>

                {/* Grid de estadísticas */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="mb-2 text-4xl font-bold text-white md:text-5xl">
                                {stat.number}
                            </div>
                            <div className="mb-1 text-lg font-semibold text-primary-100">
                                {stat.label}
                            </div>
                            <div className="text-sm text-primary-200">
                                {stat.description}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mensaje adicional */}
                <div className="mt-16 text-center">
                    <p className="text-lg italic text-primary-100">
                        "Cada donación, cada voluntario, cada persona que cree en nuestra causa,
                        hace posible estos resultados."
                    </p>
                </div>
            </div>
        </section>
    )
}
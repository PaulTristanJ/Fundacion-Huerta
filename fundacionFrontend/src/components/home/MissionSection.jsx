import { FiTarget, FiEye, FiHeart } from 'react-icons/fi'

export default function MissionSection() {
    const values = [
        {
            icon: <FiTarget className="h-8 w-8" />,
            title: "Nuestra Misión",
            description: "Empoderar a comunidades vulnerables mediante programas integrales que promuevan la educación, salud y desarrollo económico sostenible."
        },
        {
            icon: <FiEye className="h-8 w-8" />,
            title: "Nuestra Visión",
            description: "Ser una organización líder en transformación social, reconocida por nuestro impacto positivo y sostenible en las comunidades que servimos."
        },
        {
            icon: <FiHeart className="h-8 w-8" />,
            title: "Nuestros Valores",
            description: "Transparencia, compromiso, respeto, inclusión y sostenibilidad guían cada una de nuestras acciones y decisiones institucionales."
        }
    ]

    return (
        <section className="bg-white section-padding">
            <div className="container-custom">
                {/* Encabezado */}
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-display-sm font-bold text-neutral-900 md:text-display-md">
                        ¿Quiénes somos?
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-neutral-600">
                        Somos un equipo comprometido con el cambio social, trabajando día a día
                        para crear oportunidades y mejorar la calidad de vida de quienes más lo necesitan.
                    </p>
                </div>

                {/* Grid de valores */}
                <div className="grid gap-8 md:grid-cols-3">
                    {values.map((value, index) => (
                        <div
                            key={index}
                            className="group rounded-xl border border-neutral-200 bg-neutral-50 p-8 transition-all hover:border-primary-300 hover:bg-primary-50 hover:shadow-lg"
                        >
                            <div className="mb-4 inline-flex rounded-lg bg-primary-100 p-3 text-primary-600 transition-colors group-hover:bg-primary-600 group-hover:text-white">
                                {value.icon}
                            </div>
                            <h3 className="mb-3 font-display text-xl font-semibold text-neutral-900">
                                {value.title}
                            </h3>
                            <p className="text-neutral-600">
                                {value.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
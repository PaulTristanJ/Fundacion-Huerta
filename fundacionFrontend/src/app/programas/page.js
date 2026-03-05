import Button from '@/components/common/Button'
import { FiHeart, FiHome, FiTool, FiCheckCircle, FiUsers, FiTrendingUp } from 'react-icons/fi'
import Image from 'next/image'
import CollageCarousel from '@/components/home/CollageCarousel'


export const metadata = {
    title: 'Programas',
    description: 'Conoce nuestros programas de salud, vivienda digna y educación técnica.',
}

export default function ProgramsPage() {
    const programasPresente = [
        {
            id: "salud",
            icon: <FiHeart className="h-12 w-12" />,
            title: "Brigadas de Salud Integral",
            subtitle: "Atención médica accesible",
            description: "En alianza con Grupo Cava y el DIF Municipal, realizamos pruebas gratuitas de VIH y Hepatitis C, además de ofrecer medicina general, fisioterapia y medicamentos sin costo.",
            color: "red",
            image: "/images/programs/condochis.jpeg",
            imageAlt: "Personal médico brindando atención en campaña de salud comunitaria",
            features: [
                "Medicina General y Medicamentos",
                "Estomatología",
                "Fisioterapia",
                "Psicología",
                "Trabajo Social",
                "Asesoría Jurídica",
                "Nutrición y Lentes a Bajo Costo",
                "Purbas De VIH y Hepatitis C",
                "Vacunas Contra el Sarampión",
            ],
            impact: {
                number: "+2,000",
                label: "Pruebas de salud realizadas"
            }
        },
        {
            id: "vivienda",
            icon: <FiHome className="h-12 w-12" />,
            title: "Vivienda Digna",
            subtitle: "Techos seguros para familias",
            description: "Gracias a la donación de la empresa Letza, entregamos e instalamos láminas y maderas para rehabilitar techos, brindando seguridad inmediata ante el clima.",
            color: "blue",
            image: "/images/programs/vivienda/casa.jpeg",

            imageAlt: "Familia con techo rehabilitado, instalación de láminas y maderas",
            features: [
                "+500 familias protegidas con materiales de calidad",
                "Donación e instalación de techos completos",
                "Respuesta inmediata ante siniestros",
                "Materiales de primera calidad donados por Letza",
                "Cobertura en zonas rurales y urbanas"
            ],
            impact: {
                number: "+500",
                label: "Familias con techo digno"
            }
        },
        {
            id: "abrigando",
            icon: <FiUsers className="h-12 w-12" />,
            title: "Abrigando Corazones",
            subtitle: "Protección en temporada invernal",
            description: "Campaña invernal de donación de ropa y calzado en buen estado para proteger a familias vulnerables y personas en situación de calle.",
            color: "purple",
            image: "/images/programs/abrigando.jpeg",
            imageAlt: "Voluntarios distribuyendo ropa y calzado a familias vulnerables en invierno",
            features: [
                "Campaña anual de invierno",
                "Ropa y calzado en buen estado",
                "Atención a personas en situación de calle",
                "Distribución directa en comunidades",
                "Centro de acopio permanente"
            ],
            impact: {
                number: "Cientos",
                label: "De familias protegidas del frío"
            }
        }
    ]

    const programasFuturo = [
        {
            id: "carpinteria",
            icon: <FiTool className="h-12 w-12" />,
            title: "Taller de Carpintería IMJUVA",
            subtitle: "Formación técnica gratuita",
            description: "Un programa insignia donde la fundación aporta el 100% de la materia prima (madera) para que jóvenes de 15 a 29 años aprendan el oficio de forma gratuita, fomentando el emprendimiento.",
            color: "green",
            features: [
                "100% de materia prima donada (madera)",
                "Capacitación gratuita para jóvenes 15-29 años",
                "Formación técnica en carpintería",
                "Fomento al emprendimiento",
                "Horario flexible: Lunes a viernes 12:30 a 19:30 hrs"
            ],
            ubicacion: "IMJUVA - Vicario Domínguez esq. Abraham González",
            impact: {
                number: "+30",
                label: "Alumnos activos en formación"
            }
        },
        {
            id: "saludmental",
            icon: <FiHeart className="h-12 w-12" />,
            title: "Salud Mental y Bienestar",
            subtitle: "Alianza VIFAC",
            description: "Talleres de Mindfulness y ayuda psicológica gratuita para madres solteras y mujeres en etapa de gestación.",
            color: "pink",
            features: [
                "Talleres de Mindfulness",
                "Ayuda psicológica profesional gratuita",
                "Enfoque en madres solteras",
                "Apoyo durante etapa de gestación",
                "Alianza estratégica con VIFAC"
            ],
            impact: {
                number: "Apoyo",
                label: "Integral para mujeres"
            }
        },
        {
            id: "ambiental",
            icon: <FiTrendingUp className="h-12 w-12" />,
            title: "Compromiso Ambiental",
            subtitle: "Entorno sano",
            description: "Campañas de reforestación y limpieza de presas, calles y parques del estado, entendiendo que un entorno sano es la base del bienestar comunitario.",
            color: "green",
            features: [
                "Campañas de reforestación",
                "Limpieza de presas y ríos",
                "Jornadas de limpieza en calles y parques",
                "Participación ciudadana activa",
                "Educación ambiental"
            ],
            impact: {
                number: "Múltiples",
                label: "Jornadas ambientales"
            }
        }
    ]

    const colorClasses = {
        blue: {
            bg: "bg-blue-100",
            text: "text-blue-600",
            border: "border-blue-300",
            gradient: "from-blue-600 to-blue-800"
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
        },
        purple: {
            bg: "bg-purple-100",
            text: "text-purple-600",
            border: "border-purple-300",
            gradient: "from-purple-600 to-purple-800"
        },
        pink: {
            bg: "bg-pink-100",
            text: "text-pink-600",
            border: "border-pink-300",
            gradient: "from-pink-600 to-pink-800"
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
                            Dividimos nuestra acción social en dos ejes que responden a la urgencia del ahora
                            y a la construcción del mañana.
                        </p>
                    </div>
                </div>
            </section>

            {/* Eje Nutriendo el Presente */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="mb-16 text-center">
                        <div className="mb-4 text-6xl">🌱</div>
                        <h2 className="mb-4 text-display-sm font-bold text-neutral-900">
                            Nutriendo el presente
                        </h2>
                        <p className="mx-auto max-w-2xl text-lg text-neutral-600">
                            Asistencia inmediata para necesidades urgentes
                        </p>
                    </div>

                    <div className="space-y-16">
                        {programasPresente.map((program, index) => (
                            <div
                                key={program.id}
                                id={program.id}
                                className={`grid gap-12 lg:grid-cols-2 lg:items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                            >
                                {/* Contenido */}
                                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                                    <div className={`mb-6 inline-flex rounded-2xl p-4 ${colorClasses[program.color].bg} ${colorClasses[program.color].text}`}>
                                        {program.icon}
                                    </div>

                                    <h3 className="mb-2 text-display-sm font-bold text-neutral-900">
                                        {program.title}
                                    </h3>
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
                                {/* Imagen del programa */}
                                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                                    <div className="aspect-square overflow-hidden rounded-2xl lg:aspect-auto lg:h-96 relative shadow-lg">
                                        <Image
                                            src={program.image}
                                            alt={program.imageAlt}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                                            className="object-cover"
                                            quality={80}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='mt-10'>

                    < CollageCarousel />
                </div>
            </section>

            {/* Eje Sembrando el Futuro */}
            <section className="bg-neutral-50 section-padding">
                <div className="container-custom">
                    <div className="mb-16 text-center">
                        <div className="mb-4 text-6xl">🌳</div>
                        <h2 className="mb-4 text-display-sm font-bold text-neutral-900">
                            Sembrando el futuro
                        </h2>
                        <p className="mx-auto max-w-2xl text-lg text-neutral-600">
                            Desarrollo y educación para un cambio sostenible
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-3">
                        {programasFuturo.map((program) => (
                            <div
                                key={program.id}
                                id={program.id}
                                className="group rounded-3xl border border-neutral-200 bg-white p-8 transition-all hover:-translate-y-2 hover:shadow-2xl"
                            >
                                <div className={`mb-6 inline-flex rounded-2xl p-4 ${colorClasses[program.color].bg} ${colorClasses[program.color].text}`}>
                                    {program.icon}
                                </div>

                                <h3 className="mb-2 text-2xl font-bold text-neutral-900">
                                    {program.title}
                                </h3>
                                <p className={`mb-4 font-medium ${colorClasses[program.color].text}`}>
                                    {program.subtitle}
                                </p>
                                <p className="mb-6 text-neutral-600">
                                    {program.description}
                                </p>

                                {/* Características */}
                                <div className="mb-6 space-y-2">
                                    {program.features.map((feature, i) => (
                                        <div key={i} className="flex items-start gap-2">
                                            <FiCheckCircle className={`mt-0.5 h-4 w-4 flex-shrink-0 ${colorClasses[program.color].text}`} />
                                            <span className="text-sm text-neutral-700">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Ubicación si existe */}
                                {program.ubicacion && (
                                    <div className="mb-4 rounded-lg bg-neutral-50 p-3 text-sm text-neutral-600">
                                        📍 {program.ubicacion}
                                    </div>
                                )}

                                {/* Impacto */}
                                <div className={`inline-flex items-center gap-3 rounded-lg ${colorClasses[program.color].bg} px-4 py-2`}>
                                    <div className={`text-xl font-bold ${colorClasses[program.color].text}`}>
                                        {program.impact.number}
                                    </div>
                                    <div className={`text-xs ${colorClasses[program.color].text}`}>
                                        {program.impact.label}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </section>


            {/* Comunidades Impactadas */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="mx-auto max-w-4xl text-center">
                        <h2 className="mb-6 text-display-sm font-bold text-neutral-900">
                            Geografía del Cambio
                        </h2>
                        <p className="mb-8 text-lg text-neutral-600">
                            Hemos impactado comunidades específicas en todo Aguascalientes
                        </p>
                        <div className="flex flex-wrap justify-center gap-3">
                            {[
                                "Rodolfo Landeros",
                                "Pilar Blanco",
                                "Los Arquitos",
                                "Valladolit",
                                "La Loma de Maravillas",
                                "Jaltomate",
                                "Rincón de Romos",
                                "Jesús María",
                                "Calvillo"
                            ].map((comunidad, index) => (
                                <span
                                    key={index}
                                    className="rounded-full bg-primary-100 px-4 py-2 text-sm font-medium text-primary-700"
                                >
                                    {comunidad}
                                </span>
                            ))
                            }
                        </div>
                        <p className="mt-7 mb-8 text-lg text-neutral-600">
                            COLONIAS:
                        </p>
                        <div className="flex flex-wrap justify-center gap-3">
                            {[
                                "La Estrella",
                                "Mujeres Ilustres",
                                "VNSA",
                                "Morelos",
                                "Penuelas",
                                "Santa Anita",
                                "Ojocaliente",
                                "Pilar Blanco",
                                "Fracc.Circunvalación Poniente",
                                "Barranca de Guadalupe.",
                                "Pozo Bravo Sur",
                                "Vistas del Sol",
                                "El Refugio de Penuelas ",
                                "Che Guevara",
                                "Jaltomate",
                                "Lomas del Ajedrez",
                                "Las Cumbres",
                                "Infonavit Morelos",
                                "Villa Montana"
                            ].map((comunidad, index) => (
                                <span
                                    key={index}
                                    className="rounded-full bg-primary-100 px-4 py-2 text-sm font-medium text-primary-700"
                                >
                                    {comunidad}
                                </span>
                            ))
                            }
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section className="bg-gradient-to-br from-primary-600 to-secondary-600 section-padding">
                <div className="container-custom text-center">
                    <h2 className="mb-6 text-display-sm font-bold text-white md:text-display-md">
                        Apoya nuestros programas
                    </h2>
                    <p className="mb-8 text-xl text-primary-100">
                        Tu donación hace posible que sigamos transformando vidas en Aguascalientes.
                    </p>
                    <Button variant="secondary" size="lg" href="/donar">
                        Hacer una donación
                    </Button>
                </div>
            </section>
        </div>
    )
}
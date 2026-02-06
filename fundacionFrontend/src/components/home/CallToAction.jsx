import Button from '@/components/common/Button'
import { FiHeart, FiUsers, FiMail } from 'react-icons/fi'

export default function CallToAction() {
    const actions = [
        {
            icon: <FiHeart className="h-6 w-6" />,
            title: "Dona",
            description: "Tu aporte marca la diferencia",
            href: "/donar",
            buttonText: "Hacer donación"
        },
        {
            icon: <FiUsers className="h-6 w-6" />,
            title: "Voluntariado",
            description: "Comparte tu tiempo y talento",
            href: "/contacto",
            buttonText: "Únete al equipo"
        },
        {
            icon: <FiMail className="h-6 w-6" />,
            title: "Mantente informado",
            description: "Recibe nuestras noticias",
            href: "/contacto",
            buttonText: "Suscríbete"
        }
    ]

    return (
        <section className="bg-white section-padding">
            <div className="container-custom">
                {/* Encabezado */}
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-display-sm font-bold text-neutral-900 md:text-display-md">
                        ¿Cómo puedes ayudar?
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-neutral-600">
                        Hay muchas formas de ser parte del cambio. Elige la que mejor se adapte a ti
                        y únete a nuestra comunidad de personas comprometidas.
                    </p>
                </div>

                {/* Grid de acciones */}
                <div className="grid gap-8 md:grid-cols-3">
                    {actions.map((action, index) => (
                        <div
                            key={index}
                            className="rounded-xl border-2 border-neutral-200 bg-white p-8 text-center transition-all hover:border-primary-300 hover:shadow-lg"
                        >
                            <div className="mb-4 inline-flex rounded-full bg-primary-100 p-4 text-primary-600">
                                {action.icon}
                            </div>
                            <h3 className="mb-2 font-display text-2xl font-semibold text-neutral-900">
                                {action.title}
                            </h3>
                            <p className="mb-6 text-neutral-600">
                                {action.description}
                            </p>
                            <Button variant="outline" href={action.href} className="w-full">
                                {action.buttonText}
                            </Button>
                        </div>
                    ))}
                </div>

                {/* Banner final */}
                <div className="mt-16 rounded-2xl bg-gradient-to-br from-primary-600 to-secondary-600 p-8 text-center text-white md:p-12">
                    <h3 className="mb-4 text-2xl font-bold md:text-3xl">
                        Juntos podemos lograr más
                    </h3>
                    <p className="mb-6 text-lg text-primary-100">
                        Cada acción cuenta. Tu participación nos ayuda a seguir creciendo y
                        ampliando nuestro impacto en más comunidades.
                    </p>
                    <div className="flex flex-col justify-center gap-4 sm:flex-row">
                        <Button variant="secondary" size="lg" href="/sobre-nosotros">
                            Conoce nuestra historia
                        </Button>
                        <Button variant="outline" size="lg" href="/contacto" className="border-white text-white hover:bg-white hover:text-primary-600">
                            Contáctanos
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
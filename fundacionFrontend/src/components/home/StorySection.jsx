import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'

export default function StorySection() {
    return (
        <section className="py-20">
            <div className="container-custom">
                <div className="mx-auto max-w-4xl text-center">
                    {/* Quote estilo */}
                    <div className="mb-8">
                        <svg className="mx-auto h-12 w-12 text-primary-200" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                        </svg>
                    </div>

                    <h2 className="mb-6 text-3xl font-bold leading-tight text-neutral-900 md:text-4xl">
                        Cada donación, cada voluntario, cada persona que cree en nuestra causa
                        hace posible estos resultados
                    </h2>

                    <p className="mb-8 text-lg text-neutral-600">
                        Desde 2025, hemos trabajado mano a mano con comunidades vulnerables,
                        convirtiendo la esperanza en acción y los sueños en realidades tangibles.
                    </p>

                    <Link
                        href="/sobre-nosotros"
                        className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-8 py-4 font-medium text-white transition-all hover:bg-neutral-800"
                    >
                        Conoce nuestra historia
                        <FiArrowRight className="h-5 w-5" />
                    </Link>
                </div>
            </div>
        </section>
    )
}
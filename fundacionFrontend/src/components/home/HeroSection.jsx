import Button from '@/components/common/Button'
import { FiArrowRight, FiPlay } from 'react-icons/fi'

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50">
            <div className="container-custom section-padding">
                <div className="grid items-center gap-12 lg:grid-cols-2">
                    {/* Contenido */}
                    <div className="fade-in">
                        <h1 className="mb-6 text-display-md font-bold leading-tight text-neutral-900 md:text-display-lg">
                            Transformamos vidas,{' '}
                            <span className="text-gradient">construimos futuro</span>
                        </h1>
                        <p className="mb-8 text-lg text-neutral-600 md:text-xl">
                            Somos una organización dedicada a mejorar la calidad de vida en comunidades
                            vulnerables a través de programas de educación, salud y desarrollo sostenible.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-col gap-4 sm:flex-row">
                            <Button variant="primary" size="lg" href="/donar">
                                Hacer una donación
                                <FiArrowRight />
                            </Button>
                            <Button variant="outline" size="lg" href="/sobre-nosotros">
                                Conoce más
                            </Button>
                        </div>

                        {/* Stats rápidas */}
                        <div className="mt-12 grid grid-cols-3 gap-6 border-t border-neutral-200 pt-8">
                            <div>
                                <p className="text-3xl font-bold text-primary-600">15+</p>
                                <p className="text-sm text-neutral-600">Años de impacto</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-primary-600">50k+</p>
                                <p className="text-sm text-neutral-600">Vidas transformadas</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-primary-600">120+</p>
                                <p className="text-sm text-neutral-600">Comunidades</p>
                            </div>
                        </div>
                    </div>

                    {/* Imagen/Placeholder */}
                    <div className="relative">
                        <div className="aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-primary-400 to-secondary-400 shadow-2xl lg:aspect-auto lg:h-[600px]">
                            {/* Placeholder para imagen heroica */}
                            <div className="flex h-full items-center justify-center">
                                <div className="text-center text-white">
                                    <FiPlay className="mx-auto mb-4 h-16 w-16" />
                                    <p className="text-lg font-medium">Imagen o video de impacto</p>
                                    <p className="text-sm opacity-80">Placeholder - Reemplazar con contenido real</p>
                                </div>
                            </div>
                        </div>

                        {/* Elemento decorativo */}
                        <div className="absolute -bottom-6 -right-6 -z-10 h-72 w-72 rounded-full bg-secondary-200 opacity-50 blur-3xl" />
                    </div>
                </div>
            </div>
        </section>
    )
}
import Button from '@/components/common/Button'
import { FiArrowDown } from 'react-icons/fi'

export default function HeroSection() {
    return (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white">
            {/* Fondo con círculos decorativos */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute left-1/4 top-20 h-96 w-96 rounded-full bg-primary-100 opacity-40 blur-3xl" />
                <div className="absolute bottom-20 right-1/4 h-96 w-96 rounded-full bg-secondary-100 opacity-40 blur-3xl" />
            </div>

            <div className="container-custom py-20 text-center">
                {/* Contenido principal centrado */}
                <div className="mx-auto max-w-4xl">
                    {/* Badge superior */}
                    <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-6 py-2 text-sm font-medium text-primary-700">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-400 opacity-75"></span>
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-500"></span>
                        </span>
                        Institución de Beneficencia Privada en Aguascalientes
                    </div>

                    {/* Título principal */}
                    <h1 className="mb-6 text-5xl font-bold leading-tight text-neutral-900 md:text-7xl">
                        Nutriendo el presente,
                        <span className="mt-2 block bg-gradient-to-r from-primary-600 via-secondary-500 to-primary-600 bg-clip-text text-transparent">
                            sembrando el futuro
                        </span>
                    </h1>

                    {/* Descripción */}
                    <p className="mx-auto mb-12 max-w-2xl text-xl leading-relaxed text-neutral-600">
                        Transformamos la voluntad de ayudar en resultados tangibles. Impulsamos salud,
                        vivienda digna y desarrollo para comunidades vulnerables de Aguascalientes.
                    </p>

                    {/* Botones centrados */}
                    <div className="mb-16 flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Button variant="primary" size="lg" href="/donar" className="min-w-[200px]">
                            Quiero ayudar
                        </Button>
                        <Button variant="outline" size="lg" href="/programas" className="min-w-[200px]">
                            Ver programas
                        </Button>
                    </div>

                    {/* Estadísticas en tarjetas */}
                    <div className="grid gap-6 md:grid-cols-3">
                        <div className="rounded-2xl border border-neutral-200 bg-white/80 p-6 backdrop-blur-sm transition-all hover:border-primary-300 hover:shadow-lg">
                            <div className="mb-2 text-4xl font-bold text-primary-600">+1,000</div>
                            <div className="text-sm font-medium text-neutral-900">Pruebas de salud</div>
                            <div className="mt-1 text-xs text-neutral-500">VIH y Hepatitis C</div>
                        </div>

                        <div className="rounded-2xl border border-neutral-200 bg-white/80 p-6 backdrop-blur-sm transition-all hover:border-primary-300 hover:shadow-lg">
                            <div className="mb-2 text-4xl font-bold text-primary-600">+80</div>
                            <div className="text-sm font-medium text-neutral-900">Familias protegidas</div>
                            <div className="mt-1 text-xs text-neutral-500">Techos rehabilitados</div>
                        </div>

                        <div className="rounded-2xl border border-neutral-200 bg-white/80 p-6 backdrop-blur-sm transition-all hover:border-primary-300 hover:shadow-lg">
                            <div className="mb-2 text-4xl font-bold text-primary-600">+25</div>
                            <div className="text-sm font-medium text-neutral-900">Jóvenes capacitados</div>
                            <div className="mt-1 text-xs text-neutral-500">Taller de Carpintería</div>
                        </div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                    <FiArrowDown className="h-6 w-6 text-neutral-400" />
                </div>
            </div>
        </section>
    )
}
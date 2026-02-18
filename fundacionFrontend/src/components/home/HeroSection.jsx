import Button from '@/components/common/Button'
import { FiArrowDown } from 'react-icons/fi'
import Image from 'next/image'

export default function HeroSection() {
    return (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
            {/* ✅ IMAGEN DE FONDO - 1920x800 */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero/hero.jpg"
                    alt="Comunidad de la fundación participando en actividades"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover"
                    quality={85}
                />
                {/* Overlay oscuro para legibilidad del texto */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
            </div>

            {/* CONTENIDO SOBRE LA IMAGEN */}
            <div className="container-custom relative z-10 py-20 text-center">
                <div className="mx-auto max-w-4xl">
                    {/* Badge superior */}
                    <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-2 text-sm font-medium text-white backdrop-blur-md">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pink-700 opacity-75"></span>
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-pink-700"></span>
                        </span>
                        Institución de Beneficencia Privada en Aguascalientes
                    </div>

                    {/* Título principal */}
                    <h1 className="mb-6 text-5xl font-bold leading-tight text-white md:text-7xl">
                        Nutriendo el presente,
                        <span className="mt-2 block text-pink-700">
                            sembrando el futuro
                        </span>
                    </h1>

                    {/* Descripción */}
                    <p className="mx-auto mb-12 max-w-2xl text-xl leading-relaxed text-white/95">
                        Transformamos la voluntad de ayudar en resultados tangibles. Impulsamos salud,
                        vivienda digna y desarrollo para comunidades vulnerables de Aguascalientes.
                    </p>

                    {/* Botones centrados */}
                    <div className="mb-16 flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Button size="lg" href="/donar" className="bg-pink-700 min-w-[200px]">
                            Quiero ayudar
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            href="/programas"
                            className="min-w-[200px] border-white text-white hover:bg-white hover:text-neutral-900"
                        >
                            Ver programas
                        </Button>
                    </div>

                    {/* Estadísticas en tarjetas con fondo translúcido */}
                    <div className="grid gap-6 md:grid-cols-3">
                        <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-md transition-all hover:bg-white/15 hover:border-white/30">
                            <div className="mb-2 text-4xl font-bold text-blue-500">+1,000</div>
                            <div className="text-sm font-medium text-white">Pruebas de salud</div>
                            <div className="mt-1 text-xs text-white/80">VIH y Hepatitis C</div>
                        </div>

                        <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-md transition-all hover:bg-white/15 hover:border-white/30">
                            <div className="mb-2 text-4xl font-bold text-blue-500">+80</div>
                            <div className="text-sm font-medium text-white">Familias protegidas</div>
                            <div className="mt-1 text-xs text-white/80">Techos rehabilitados</div>
                        </div>

                        <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-md transition-all hover:bg-white/15 hover:border-white/30">
                            <div className="mb-2 text-4xl font-bold text-blue-500">+25</div>
                            <div className="text-sm font-medium text-white">Jóvenes capacitados</div>
                            <div className="mt-1 text-xs text-white/80">Taller de Carpintería</div>
                        </div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                    <FiArrowDown className="h-6 w-6 text-white/70" />
                </div>
            </div>
        </section>
    )
}
import Button from '@/components/common/Button'
import { FiHeart } from 'react-icons/fi'

export default function CallToAction() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 py-20">
            {/* Elementos decorativos */}
            <div className="absolute inset-0">
                <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-white opacity-5 blur-3xl" />
                <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-white opacity-5 blur-3xl" />
            </div>

            <div className="container-custom relative">
                <div className="mx-auto max-w-4xl text-center text-white">
                    {/* Icono */}
                    <div className="mb-6 inline-flex rounded-full bg-white/10 p-4 backdrop-blur-sm">
                        <FiHeart className="h-12 w-12" />
                    </div>

                    {/* Título */}
                    <h2 className="mb-6 text-4xl font-bold md:text-5xl">
                        Únete al cambio
                    </h2>

                    {/* Descripción */}
                    <p className="mb-10 text-xl text-primary-100">
                        Tu generosidad transforma vidas. Juntos podemos crear un futuro
                        mejor para miles de personas.
                    </p>

                    {/* Botones */}
                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Button
                            variant="secondary"
                            size="lg"
                            href="/donar"
                            className="min-w-[200px] bg-white text-primary-600 hover:bg-neutral-50"
                        >
                            Donar ahora
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            href="/contacto"
                            className="min-w-[200px] border-white text-white hover:bg-white/10"
                        >
                            Ser voluntario
                        </Button>
                    </div>

                    {/* Trust badges */}
                    <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-primary-100">
                        <div className="flex items-center gap-2">
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            100% Transparente
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                            </svg>
                            Auditados anualmente
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                            </svg>
                            Deducible de impuestos
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
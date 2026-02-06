import Link from 'next/link'
import Button from '@/components/common/Button'
import Card from '@/components/common/Card'
import { FiBook, FiHeart, FiTrendingUp, FiArrowRight } from 'react-icons/fi'
import { siteConfig } from '@/config/siteConfig'

export default function ProgramsPreview() {
    const programIcons = {
        book: <FiBook className="h-8 w-8" />,
        heart: <FiHeart className="h-8 w-8" />,
        sprout: <FiTrendingUp className="h-8 w-8" />,
    }

    const colorClasses = {
        primary: 'bg-primary-100 text-primary-600 group-hover:bg-primary-600 group-hover:text-white',
        error: 'bg-red-100 text-red-600 group-hover:bg-red-600 group-hover:text-white',
        success: 'bg-green-100 text-green-600 group-hover:bg-green-600 group-hover:text-white',
    }

    return (
        <section className="bg-neutral-50 section-padding">
            <div className="container-custom">
                {/* Encabezado */}
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-display-sm font-bold text-neutral-900 md:text-display-md">
                        Nuestros Programas
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-neutral-600">
                        Trabajamos en tres áreas fundamentales para generar un impacto integral
                        y sostenible en las comunidades que atendemos.
                    </p>
                </div>

                {/* Grid de programas */}
                <div className="mb-12 grid gap-8 md:grid-cols-3">
                    {siteConfig.programs.map((program) => (
                        <Link key={program.id} href={`/programas#${program.id}`}>
                            <Card hover className="group h-full">
                                <div className={`mb-4 inline-flex rounded-lg p-3 transition-colors ${colorClasses[program.color]}`}>
                                    {programIcons[program.icon]}
                                </div>
                                <h3 className="mb-3 font-display text-xl font-semibold text-neutral-900">
                                    {program.title}
                                </h3>
                                <p className="mb-4 text-neutral-600">
                                    {program.description}
                                </p>
                                <div className="flex items-center gap-2 text-primary-600 transition-all group-hover:gap-3">
                                    <span className="text-sm font-medium">Conoce más</span>
                                    <FiArrowRight className="h-4 w-4" />
                                </div>
                            </Card>
                        </Link>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center">
                    <Button variant="outline" size="lg" href="/programas">
                        Ver todos los programas
                        <FiArrowRight />
                    </Button>
                </div>
            </div>
        </section>
    )
}
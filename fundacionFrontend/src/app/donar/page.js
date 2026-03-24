'use client'

import Button from '@/components/common/Button'
import Card from '@/components/common/Card'
import Image from 'next/image'
import { FiDollarSign, FiPackage, FiUsers, FiInfo, FiInstagram } from 'react-icons/fi'
import { FaFacebookF } from 'react-icons/fa'

export default function DonatePage() {
    const formasDonacion = [
        {
            icon: <FiDollarSign className="h-8 w-8" />,
            title: "Donación Económica",
            description: "Aportaciones únicas o recurrentes que se destinan directamente a programas sociales."
        },
        {
            icon: <FiPackage className="h-8 w-8" />,
            title: "Donación en Especie",
            description: "Ropa, calzado, cobijas, juguetes, madera y materia prima para talleres y programas."
        },
        {
            icon: <FiUsers className="h-8 w-8" />,
            title: "Voluntariado",
            description: "Únete a nuestras brigadas de salud, logística de eventos o entregas en campo."
        },
    ]

    const donacionesEspecie = [
        "Ropa y calzado en buen estado",
        "Cobijas y artículos de invierno",
        "Juguetes para niños",
        "Madera y materia prima para talleres",
        "Materiales de construcción",
        "Meidcamentos",
        "Alimentos no perecederos",
        "RECIBIMOS CUALQUIER TIPO DE DONACIÓN",
    ]

    const impacto = [
        {
            cantidad: "$500",
            descripcion: "Apoyan pruebas médicas para 5 familias"
        },
        {
            cantidad: "$1,000",
            descripcion: "Materiales para reparar 1 techo"
        },
        {
            cantidad: "$2,500",
            descripcion: "Materia prima para 1 mes de taller de carpintería"
        },
        {
            cantidad: "$5,000",
            descripcion: "Brigada de salud completa en 1 comunidad"
        }
    ]

    return (
        <div className="bg-white">

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
                <div className="container-custom">
                    <div className="mx-auto max-w-3xl text-center">
                        <h1 className="mb-6 text-display-md font-bold text-neutral-900 md:text-display-lg">
                            Cómo Ayudar
                        </h1>
                        <p className="text-xl text-neutral-600">
                            El motor de nuestra fundación es la suma de voluntades. Invitamos a la ciudadanía
                            y al sector empresarial a ser parte de esta estructura de apoyo.
                        </p>
                    </div>
                </div>
            </section>

            {/* Formas de Contribuir */}
            <section className="section-padding">
                <div className="container-custom">
                    <h2 className="mb-12 text-center text-display-sm font-bold text-neutral-900">
                        Formas de Contribuir
                    </h2>
                    <div className="grid gap-8 md:grid-cols-3">
                        {formasDonacion.map((forma, index) => (
                            <Card key={index} className="text-center">
                                <div className="mb-4 inline-flex rounded-full bg-primary-100 p-4 text-primary-600">
                                    {forma.icon}
                                </div>
                                <h3 className="mb-3 font-display text-xl font-semibold text-neutral-900">
                                    {forma.title}
                                </h3>
                                <p className="text-neutral-600">
                                    {forma.description}
                                </p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tu Donación en Acción */}
            <section className="bg-neutral-50 section-padding">
                <div className="container-custom">
                    <div className="mx-auto max-w-md rounded-2xl bg-white p-8 shadow-lg">

                        <h2 className="mb-4 text-center text-2xl font-bold text-neutral-900">
                            Haz una Donación
                        </h2>

                        <p className="mb-6 text-center text-neutral-600">
                            Tu apoyo ayuda a transformar vidas en nuestra comunidad.
                        </p>

                        <form className="space-y-4">

                            <input
                                type="text"
                                placeholder="Nombre completo"
                                className="w-full rounded-lg border border-neutral-300 p-3 focus:border-primary-500 focus:outline-none"
                            />

                            <input
                                type="email"
                                placeholder="Correo electrónico"
                                className="w-full rounded-lg border border-neutral-300 p-3 focus:border-primary-500 focus:outline-none"
                            />

                            <input
                                type="number"
                                placeholder="Monto de donación (MXN)"
                                className="w-full rounded-lg border border-neutral-300 p-3 focus:border-primary-500 focus:outline-none"
                            />

                            <textarea
                                placeholder="Mensaje (opcional)"
                                rows="3"
                                className="w-full rounded-lg border border-neutral-300 p-3 focus:border-primary-500 focus:outline-none"
                            />

                            <Button variant="primary" size="lg">
                                Donar ahora
                            </Button>

                        </form>

                        <p className="mt-4 text-center text-sm text-neutral-500">
                            Puede ser en una sola exhibición o donación mensual.
                        </p>

                    </div>
                </div>

            </section >

            {/* Donaciones en Especie */}
            <section className="section-padding" >
                <div className="container-custom">
                    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                        <div>
                            <h2 className="mb-6 text-display-sm font-bold text-neutral-900">
                                Donaciones en Especie
                            </h2>
                            <p className="mb-6 text-lg text-neutral-600">
                                Recibimos diversos artículos que ayudan directamente a nuestros beneficiarios:
                            </p>
                            <div className="mb-8 space-y-3">
                                {donacionesEspecie.map((item, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <div className="flex-shrink-0 rounded-full bg-primary-100 p-2">
                                            <FiPackage className="h-4 w-4 text-primary-600" />
                                        </div>
                                        <span className="text-neutral-700">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="rounded-xl bg-neutral-50 p-6">
                                <h3 className="mb-3 font-display text-lg font-semibold text-neutral-900">
                                    📍 Centro de Acopio
                                </h3>
                                <p className="mb-2 text-neutral-700">
                                    <strong>Ubicación:</strong> Instalaciones de Tableros Bonaterra
                                </p>
                                <a
                                    href="https://www.google.com/maps/place/Tableros+Bonaterra/@21.9172924,-102.2966572,17z/data=!3m1!4b1!4m6!3m5!1s0x8429ee997a669f89:0x48306cf57d1d97a4!8m2!3d21.9172924!4d-102.2940823!16s%2Fg%2F11b6syl800?entry=ttu&g_ep=EgoyMDI2MDMwMi4wIKXMDSoASAFQAw%3D%3D"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary-600 underline"
                                >
                                    Ver ubicación
                                </a>

                                <p className="text-neutral-700">
                                    <strong>Horario:</strong> Lunes a Viernes de 8:30 a 18:00 hrs
                                </p>
                                <p>Sabado de 9:00 a 14:00</p>

                            </div>
                        </div>

                        {/* ✅ Imagen corregida — proporción 2:1 igual que AS.png */}
                        <div className="relative w-full overflow-hidden rounded-2xl" style={{ aspectRatio: '2 / 1' }}>
                            <Image
                                src="/images/AS.png"
                                alt="Artículos de donación en especie - Huerta Fundación"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </div>
                </div>
            </section >

            {/* Voluntariado */}
            <section className="bg-gradient-to-br from-secondary-50 to-primary-50 section-padding" >
                <div className="container-custom">
                    <div className="mx-auto max-w-3xl text-center">
                        <div className="mb-6 inline-flex rounded-full bg-white p-4 shadow-lg">
                            <FiUsers className="h-12 w-12 text-primary-600" />
                        </div>
                        <h2 className="mb-6 text-display-sm font-bold text-neutral-900">
                            Comunidad de Voluntarios
                        </h2>
                        <p className="mb-8 text-lg text-neutral-600">
                            Únete a la Comunidad de Voluntarios Huerta Fundación. Participa en nuestras
                            brigadas de salud, logística de eventos o entregas en campo.
                        </p>
                        <div className="mb-8 grid gap-6 md:grid-cols-3">
                            <div className="rounded-xl bg-white p-6 shadow-md">
                                <div className="mb-2 text-2xl">🏥</div>
                                <h3 className="mb-2 font-semibold text-neutral-900">Brigadas de Salud</h3>
                                <p className="text-sm text-neutral-600">Apoyo en organización y logística</p>
                            </div>
                            <div className="rounded-xl bg-white p-6 shadow-md">
                                <div className="mb-2 text-2xl">📦</div>
                                <h3 className="mb-2 font-semibold text-neutral-900">Logística</h3>
                                <p className="text-sm text-neutral-600">Eventos y entregas especiales</p>
                            </div>
                            <div className="rounded-xl bg-white p-6 shadow-md">
                                <div className="mb-2 text-2xl">🤝</div>
                                <h3 className="mb-2 font-semibold text-neutral-900">Campo</h3>
                                <p className="text-sm text-neutral-600">Entregas directas en comunidades</p>
                            </div>
                            <div >

                            </div>
                            <a
                                href="https://www.instagram.com/voluntarioshuertafundacion/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-col items-center justify-center rounded-xl bg-white p-6 shadow-md transition hover:shadow-lg hover:scale-105"
                            >
                                <FiInstagram className="mb-2 h-6 w-6 text-pink-500" />
                                <h3 className="mb-2 font-semibold text-neutral-900 text-center">
                                    Instagram
                                </h3>
                                <p className="text-sm text-neutral-600 text-center">
                                    Comunidad voluntarios de Fundacion Huerta
                                </p>
                            </a>
                            <a
                                href="https://www.facebook.com/FundacionHuerta"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-col items-center justify-center rounded-xl bg-white p-6 shadow-md transition hover:shadow-lg hover:scale-105"
                            >
                                <FaFacebookF className="mb-2 h-6 w-6 text-blue-600" />
                                <h3 className="mb-2 font-semibold text-neutral-900 text-center">
                                    Facebook
                                </h3>
                                <p className="text-sm text-neutral-600 text-center">
                                    Comunidad voluntarios de Fundacion Huerta
                                </p>
                            </a>
                        </div>
                        <Button variant="primary" size="lg" href="/contacto">
                            Quiero ser voluntario
                        </Button>
                    </div>
                </div>
            </section >

            {/* Transparencia */}
            <section className="bg-gradient-to-br from-primary-600 to-secondary-700 section-padding" >
                <div className="container-custom">
                    <div className="mx-auto max-w-3xl text-center text-primary">
                        <h2 className="mb-6 text-display-sm font-bold">
                            Transparencia Total
                        </h2>
                        <p className="mb-8 text-lg text-primary-100">
                            Como Institución de Beneficencia Privada (I.B.P.), cada peso donado se destina
                            directamente a programas sociales. Somos una organización sin fines de lucro con
                            gobernanza profesional y rendición de cuentas.
                        </p>
                        <div className="grid gap-8 md:grid-cols-3">
                            <div>
                                <div className="mb-2 text-4xl font-bold">100%</div>
                                <div className="text-primary-100">Sin fines de lucro</div>
                            </div>
                            <div>
                                <div className="mb-2 text-4xl font-bold">I.B.P.</div>
                                <div className="text-primary-100">Registrada legalmente</div>
                            </div>
                            <div>
                                <div className="mb-2 text-4xl font-bold">+24</div>
                                <div className="text-primary-100">Convenios estratégicos</div>
                            </div>


                        </div>
                        <div className="mb-10 text-4xl "></div>
                        <p className="text-primary-100 font-extralight">Acreditados y avalados como donatarios autorizados por el DIF estatal y por el S.A.T.</p>

                    </div>
                </div>
            </section >

            {/* Testimonios */}
            <section section className="section-padding" >
                <div className="container-custom">
                    <h2 className="mb-12 text-center text-display-sm font-bold text-neutral-900">
                        Testimonios
                    </h2>
                    <div className="grid gap-8 md:grid-cols-2">
                        <Card className="relative">
                            <div className="mb-4 text-4xl text-primary-200">"</div>
                            <p className="mb-4 italic text-neutral-700">
                                Gracias a la madera que nos dieron, mis hijos ahora tienen un techo seco
                                donde dormir antes de que lleguen las lluvias.
                            </p>
                            <p className="font-semibold text-neutral-900">
                                — Beneficiaria en Jesús María
                            </p>
                        </Card>
                        <Card className="relative">
                            <div className="mb-4 text-4xl text-primary-200">"</div>
                            <p className="mb-4 italic text-neutral-700">
                                En el taller de carpintería no solo aprendo el oficio; la fundación nos
                                regala toda la madera para que podamos practicar y empezar nuestros propios muebles.
                            </p>
                            <p className="font-semibold text-neutral-900">
                                — Alumno de IMJUVA
                            </p>
                        </Card>
                        <Card className="relative">
                            <div className="mb-4 text-4xl text-primary-200">"</div>
                            <p className="mb-4 italic text-neutral-700">
                                Gracias a la madera que nos dieron, mis hijos ahora tienen un techo seco
                                donde dormir antes de que lleguen las lluvias.
                            </p>
                            <p className="font-semibold text-neutral-900">
                                — Beneficiaria en Jesús María
                            </p>
                        </Card>
                        <Card className="relative">
                            <div className="mb-4 text-4xl text-primary-200">"</div>
                            <p className="mb-4 italic text-neutral-700">
                                Gracias a la madera que nos dieron, mis hijos ahora tienen un techo seco
                                donde dormir antes de que lleguen las lluvias.
                            </p>
                            <p className="font-semibold text-neutral-900">
                                — Beneficiaria en Jesús María
                            </p>
                        </Card>
                    </div>
                </div>
            </section >

            {/* CTA Final */}
            < section className="bg-neutral-50 section-padding" >
                <div className="container-custom text-center">
                    <h2 className="mb-6 text-display-sm font-bold text-neutral-900">
                        La solidaridad es una inversión con retorno social garantizado
                    </h2>
                    <p className="mb-8 text-lg text-neutral-600">
                        Cada aportación, sin importar su tamaño, genera un impacto real en Aguascalientes.
                    </p>
                    <div className="flex flex-col justify-center gap-4 sm:flex-row">
                        <Button variant="primary" size="lg" href="/contacto">
                            Contactar para donar
                        </Button>
                        <Button variant="outline" size="lg" href="/sobre-nosotros">
                            Conocer más
                        </Button>
                    </div>
                </div>
            </ section >

        </div >
    )
}
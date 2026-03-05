'use client'

import { useState } from 'react'
import Button from '@/components/common/Button'
import Card from '@/components/common/Card'
import { FiMail, FiPhone, FiMapPin, FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiSend, FiClock, FiPackage } from 'react-icons/fi'
import { siteConfig } from '@/config/siteConfig'

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        alert('Funcionalidad en desarrollo. El formulario se integrará con el backend próximamente.')
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const ubicaciones = [
        {
            icon: <FiPackage className="h-6 w-6" />,
            title: "Centro de Acopio Principal",
            content: "Instalaciones de Tableros Bonaterra, IMJUVA y Balam",
            extra: "Para donaciones en especie",
        },
        {
            icon: <FiMapPin className="h-6 w-6" />,
            title: "Taller de Carpintería",
            content: "IMJUVA - Vicario Domínguez esq. Abraham González",
            extra: "Frente al parque azul"
        }
    ]

    const razones = [
        {
            title: "Quiero ser voluntario",
            description: "Únete a la Comunidad de Voluntarios y participa en brigadas de salud y entregas."
        },
        {
            title: "Donar en especie",
            description: "Ropa, calzado, cobijas, madera y materiales para nuestros programas."
        },
        {
            title: "Alianzas corporativas",
            description: "Colabora con nosotros para generar impacto social desde tu empresa."
        },
        {
            title: "Información general",
            description: "¿Tienes preguntas sobre nuestros programas? Estamos aquí para ayudarte."
        },
        {
            title: "Brigadas",
            description: "Te gustaria que hagamos en conjunto con el DIF municipal, una brigada médica gratuita en tu colonia. Escríbenos"
        },
        {
            title: "¡Ayuda a otro!",
            description: "Tienes algún familiar o conoces alguna persona en situación vulnerable que necesite de la ayuda de Fundacion Huerta escríbenos"
        },

    ]

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
                <div className="container-custom">
                    <div className="mx-auto max-w-3xl text-center">
                        <h1 className="mb-6 text-display-md font-bold text-neutral-900 md:text-display-lg">
                            Contáctanos
                        </h1>
                        <p className="text-xl text-neutral-600">
                            Estamos cerca de ti para escucharte, apoyarte o recibir tu generosidad.
                            Descubre cómo ser parte del cambio.
                        </p>
                    </div>
                </div>
            </section>

            {/* Razones para contactar */}
            <section className="section-padding">
                <div className="container-custom">
                    <h2 className="mb-12 text-center text-display-sm font-bold text-neutral-900">
                        ¿En qué podemos ayudarte?
                    </h2>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {razones.map((razon, index) => (
                            <Card key={index} hover>
                                <h3 className="mb-2 font-display text-lg font-semibold text-neutral-900">
                                    {razon.title}
                                </h3>
                                <p className="text-sm text-neutral-600">
                                    {razon.description}
                                </p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Formulario de contacto */}
            <section className="bg-neutral-50 section-padding">
                <div className="container-custom">
                    <div className="grid gap-12 lg:grid-cols-2">
                        {/* Formulario */}
                        <div>
                            <h2 className="mb-6 text-display-sm font-bold text-neutral-900">
                                Envíanos un mensaje
                            </h2>

                            <Card>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="label">
                                            Nombre completo *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="input"
                                            placeholder="Tu nombre"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="label">
                                            Correo electrónico *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="input"
                                            placeholder="tu@email.com"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="subject" className="label">
                                            Asunto *
                                        </label>
                                        <select
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            className="input"
                                        >
                                            <option value="">Selecciona un tema</option>
                                            <option value="voluntario">Quiero ser voluntario</option>
                                            <option value="donacion">Donación económica o en especie</option>
                                            <option value="alianza">Alianza corporativa</option>
                                            <option value="taller">Taller de Carpintería</option>
                                            <option value="general">Información general</option>
                                            <option value="Brigadas">Brigadas</option>
                                            <option value="¡Ayuda a otro!">Ayuda a otro</option>
                                            <option value="ayuda">¡Necesito ayuda!</option>
                                            <option value="otro">Otra opción</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="label">
                                            Mensaje *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={5}
                                            className="input resize-none"
                                            placeholder="Cuéntanos cómo podemos ayudarte..."
                                        />
                                    </div>

                                    <Button type="submit" variant="primary" size="lg" className="w-full">
                                        <FiSend />
                                        Enviar mensaje
                                    </Button>

                                    <p className="text-xs text-neutral-600">
                                        * Campos requeridos. Nos comprometemos a responder en un plazo
                                        máximo de 48 horas hábiles.
                                    </p>
                                </form>
                            </Card>
                        </div>

                        {/* Información de contacto */}
                        <div>
                            <h2 className="mb-6 text-display-sm font-bold text-neutral-900">
                                Información de contacto
                            </h2>

                            <div className="mb-8 space-y-6">
                                <div className="group">
                                    <a
                                        href={`mailto:${siteConfig.contact.email}`}
                                        className="flex items-start gap-4 transition-colors"
                                    >
                                        <div className="flex-shrink-0 rounded-lg bg-primary-100 p-3 text-primary-600 transition-colors group-hover:bg-primary-600 group-hover:text-white">
                                            <FiMail className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <div className="mb-1 font-semibold text-neutral-900">
                                                Email
                                            </div>
                                            <div className="text-neutral-600 group-hover:text-primary-600">
                                                {siteConfig.contact.email}
                                            </div>
                                        </div>
                                    </a>
                                </div>

                                <div className="group">
                                    <a
                                        href={`tel:${siteConfig.contact.phone}`}
                                        className="flex items-start gap-4 transition-colors"
                                    >
                                        <div className="flex-shrink-0 rounded-lg bg-primary-100 p-3 text-primary-600 transition-colors group-hover:bg-primary-600 group-hover:text-white">
                                            <FiPhone className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <div className="mb-1 font-semibold text-neutral-900">
                                                Teléfono
                                            </div>
                                            <div className="text-neutral-600 group-hover:text-primary-600">
                                                {siteConfig.contact.phone}
                                            </div>
                                        </div>
                                    </a>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 rounded-lg bg-primary-100 p-3 text-primary-600">
                                        <FiMapPin className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <div className="mb-1 font-semibold text-neutral-900">
                                            Aguascalientes
                                        </div>
                                        <div className="text-neutral-600">
                                            {siteConfig.contact.address}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Ubicaciones */}
                            <h3 className="mb-4 font-display text-xl font-semibold text-neutral-900">
                                Nuestras Ubicaciones
                            </h3>
                            <div className="mb-8 space-y-4">
                                {ubicaciones.map((ubicacion, index) => (
                                    <Card key={index}>
                                        <div className="flex items-start gap-4">
                                            <div className="flex-shrink-0 rounded-lg bg-primary-100 p-2 text-primary-600">
                                                {ubicacion.icon}
                                            </div>
                                            <div>
                                                <div className="mb-1 font-semibold text-neutral-900">
                                                    {ubicacion.title}
                                                </div>
                                                <div className="mb-1 text-sm text-neutral-700">
                                                    {ubicacion.content}
                                                </div>
                                                <div className="text-xs text-neutral-500">
                                                    {ubicacion.extra}
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                ))}
                            </div>

                            {/* Horarios */}
                            <Card className="mb-8">
                                <div className="mb-4 flex items-center gap-2">
                                    <FiClock className="h-5 w-5 text-primary-600" />
                                    <h3 className="font-display text-xl font-semibold text-neutral-900">
                                        Horarios
                                    </h3>
                                </div>
                                <div className="space-y-2 text-neutral-600">
                                    <div className="flex justify-between">
                                        <span>Taller de Carpintería:</span>
                                        <span className="font-medium">Lun-Vie 8:00-15:30</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Centro de Acopio:</span>
                                        <span className="font-medium">Lun-Vie 8:30-18:00, Sabado 9:00-14:00</span>
                                    </div>
                                    <a
                                        href="https://www.google.com/maps/place/Tableros+Bonaterra/@21.9172924,-102.2966572,17z/data=!3m1!4b1!4m6!3m5!1s0x8429ee997a669f89:0x48306cf57d1d97a4!8m2!3d21.9172924!4d-102.2940823!16s%2Fg%2F11b6syl800?entry=ttu&g_ep=EgoyMDI2MDMwMi4wIKXMDSoASAFQAw%3D%3D"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-primary-600 underline"
                                    >
                                        Tableros Bonaterra, Aguascalientes, México
                                    </a>
                                </div>
                            </Card>

                            {/* Redes sociales */}
                            <div>
                                <h3 className="mb-4 font-display text-xl font-semibold text-neutral-900">
                                    Síguenos en redes
                                </h3>
                                <div className="flex gap-4">
                                    <a
                                        href={siteConfig.social.facebook}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="rounded-full bg-neutral-200 p-3 text-neutral-700 transition-colors hover:bg-primary-600 hover:text-white"
                                        aria-label="Facebook"
                                    >
                                        <FiFacebook className="h-6 w-6" />
                                    </a>

                                    <a
                                        href={siteConfig.social.instagram}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="rounded-full bg-neutral-200 p-3 text-neutral-700 transition-colors hover:bg-primary-600 hover:text-white"
                                        aria-label="Instagram"
                                    >
                                        <FiInstagram className="h-6 w-6" />
                                    </a>

                                </div>
                                <p className="mt-4 text-sm text-neutral-600">
                                    📷 Instagram: <a href={siteConfig.social.instagram} className="font-medium text-primary-600 hover:underline">@huertafundacion</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mapa placeholder */}



        </div>
    )
}
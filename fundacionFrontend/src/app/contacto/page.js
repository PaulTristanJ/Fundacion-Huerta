'use client'

import { useState } from 'react'
import Button from '@/components/common/Button'
import Card from '@/components/common/Card'
import { FiMail, FiPhone, FiMapPin, FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiSend } from 'react-icons/fi'
import { siteConfig } from '@/config/siteConfig'

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    // NOTA: Este handler es solo UI. La integración con el backend se agregará después
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

    const contactInfo = [
        {
            icon: <FiMail className="h-6 w-6" />,
            title: "Email",
            content: siteConfig.contact.email,
            link: `mailto:${siteConfig.contact.email}`
        },
        {
            icon: <FiPhone className="h-6 w-6" />,
            title: "Teléfono",
            content: siteConfig.contact.phone,
            link: `tel:${siteConfig.contact.phone}`
        },
        {
            icon: <FiMapPin className="h-6 w-6" />,
            title: "Dirección",
            content: siteConfig.contact.address,
            link: null
        }
    ]

    const reasons = [
        {
            title: "Quiero ser voluntario",
            description: "Únete a nuestro equipo de voluntarios y ayuda directamente en nuestras comunidades."
        },
        {
            title: "Alianzas corporativas",
            description: "Colabora con nosotros para generar impacto social desde tu organización."
        },
        {
            title: "Prensa y medios",
            description: "Solicita información, entrevistas o material audiovisual de nuestro trabajo."
        },
        {
            title: "Información general",
            description: "¿Tienes preguntas sobre nuestros programas? Estamos aquí para ayudarte."
        }
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
                            Estamos aquí para responder tus preguntas y acompañarte en tu
                            camino para ser parte del cambio.
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
                        {reasons.map((reason, index) => (
                            <Card key={index} hover>
                                <h3 className="mb-2 font-display text-lg font-semibold text-neutral-900">
                                    {reason.title}
                                </h3>
                                <p className="text-sm text-neutral-600">
                                    {reason.description}
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
                                            <option value="donacion">Información sobre donaciones</option>
                                            <option value="alianza">Alianza corporativa</option>
                                            <option value="prensa">Prensa y medios</option>
                                            <option value="general">Información general</option>
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
                                {contactInfo.map((info, index) => (
                                    <div key={index}>
                                        {info.link ? (
                                            <a
                                                href={info.link}
                                                className="group flex items-start gap-4 transition-colors"
                                            >
                                                <div className="flex-shrink-0 rounded-lg bg-primary-100 p-3 text-primary-600 transition-colors group-hover:bg-primary-600 group-hover:text-white">
                                                    {info.icon}
                                                </div>
                                                <div>
                                                    <div className="mb-1 font-semibold text-neutral-900">
                                                        {info.title}
                                                    </div>
                                                    <div className="text-neutral-600 group-hover:text-primary-600">
                                                        {info.content}
                                                    </div>
                                                </div>
                                            </a>
                                        ) : (
                                            <div className="flex items-start gap-4">
                                                <div className="flex-shrink-0 rounded-lg bg-primary-100 p-3 text-primary-600">
                                                    {info.icon}
                                                </div>
                                                <div>
                                                    <div className="mb-1 font-semibold text-neutral-900">
                                                        {info.title}
                                                    </div>
                                                    <div className="text-neutral-600">
                                                        {info.content}
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* Horarios */}
                            <Card className="mb-8">
                                <h3 className="mb-4 font-display text-xl font-semibold text-neutral-900">
                                    Horario de atención
                                </h3>
                                <div className="space-y-2 text-neutral-600">
                                    <p>Lunes a Viernes: 9:00 - 18:00 hrs</p>
                                    <p>Sábados: 10:00 - 14:00 hrs</p>
                                    <p className="text-sm italic">Domingo: Cerrado</p>
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
                                        href={siteConfig.social.twitter}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="rounded-full bg-neutral-200 p-3 text-neutral-700 transition-colors hover:bg-primary-600 hover:text-white"
                                        aria-label="Twitter"
                                    >
                                        <FiTwitter className="h-6 w-6" />
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
                                    <a
                                        href={siteConfig.social.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="rounded-full bg-neutral-200 p-3 text-neutral-700 transition-colors hover:bg-primary-600 hover:text-white"
                                        aria-label="LinkedIn"
                                    >
                                        <FiLinkedin className="h-6 w-6" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mapa (placeholder) */}
            <section className="section-padding">
                <div className="container-custom">
                    <h2 className="mb-8 text-center text-display-sm font-bold text-neutral-900">
                        Encuéntranos
                    </h2>
                    <div className="aspect-video overflow-hidden rounded-2xl bg-neutral-200">
                        <div className="flex h-full items-center justify-center text-neutral-600">
                            <div className="text-center">
                                <FiMapPin className="mx-auto mb-4 h-12 w-12" />
                                <p>Mapa interactivo de Google Maps</p>
                                <p className="text-sm">Placeholder - Integrar con Maps API</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
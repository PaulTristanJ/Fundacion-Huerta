import Link from 'next/link'
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiMail, FiPhone, FiMapPin, FiHeart } from 'react-icons/fi'
import { siteConfig } from '@/config/siteConfig'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="border-t border-neutral-200 bg-neutral-50">
            {/* Main Footer */}
            <div className="container-custom py-12 md:py-16">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {/* Sobre la fundación */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="mb-4 inline-flex items-center gap-2 text-xl font-bold text-primary-600">
                            <FiHeart className="h-6 w-6" />
                            <span className="font-display">Huerta Fundación</span>
                        </Link>
                        <p className="mb-6 max-w-md text-neutral-600">
                            Institución de Beneficencia Privada en Aguascalientes. Nutriendo el presente,
                            sembrando el futuro a través de salud, vivienda digna y educación técnica.
                        </p>

                        {/* Redes sociales */}
                        <div className="flex gap-4">
                            <a
                                href={siteConfig.social.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-full bg-neutral-200 p-2 text-neutral-700 transition-colors hover:bg-primary-600 hover:text-white"
                                aria-label="Facebook"
                            >
                                <FiFacebook className="h-5 w-5" />
                            </a>
                            <a
                                href={siteConfig.social.twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-full bg-neutral-200 p-2 text-neutral-700 transition-colors hover:bg-primary-600 hover:text-white"
                                aria-label="Twitter"
                            >
                                <FiTwitter className="h-5 w-5" />
                            </a>
                            <a
                                href={siteConfig.social.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-full bg-neutral-200 p-2 text-neutral-700 transition-colors hover:bg-primary-600 hover:text-white"
                                aria-label="Instagram"
                            >
                                <FiInstagram className="h-5 w-5" />
                            </a>
                            <a
                                href={siteConfig.social.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-full bg-neutral-200 p-2 text-neutral-700 transition-colors hover:bg-primary-600 hover:text-white"
                                aria-label="LinkedIn"
                            >
                                <FiLinkedin className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Enlaces rápidos */}
                    <div>
                        <h3 className="mb-4 font-display text-lg font-semibold text-neutral-900">
                            Enlaces Rápidos
                        </h3>
                        <ul className="space-y-3">
                            {siteConfig.navigation.map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className="text-neutral-600 transition-colors hover:text-primary-600"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contacto */}
                    <div>
                        <h3 className="mb-4 font-display text-lg font-semibold text-neutral-900">
                            Contacto
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href={`mailto:${siteConfig.contact.email}`}
                                    className="flex items-center gap-2 text-neutral-600 transition-colors hover:text-primary-600"
                                >
                                    <FiMail className="h-4 w-4 flex-shrink-0" />
                                    <span className="text-sm">{siteConfig.contact.email}</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href={`tel:${siteConfig.contact.phone}`}
                                    className="flex items-center gap-2 text-neutral-600 transition-colors hover:text-primary-600"
                                >
                                    <FiPhone className="h-4 w-4 flex-shrink-0" />
                                    <span className="text-sm">{siteConfig.contact.phone}</span>
                                </a>
                            </li>
                            <li>
                                <div className="flex items-start gap-2 text-neutral-600">
                                    <FiMapPin className="mt-0.5 h-4 w-4 flex-shrink-0" />
                                    <span className="text-sm">{siteConfig.contact.address}</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-neutral-200 bg-neutral-100">
                <div className="container-custom py-6">
                    <div className="flex flex-col items-center justify-between gap-4 text-sm text-neutral-600 md:flex-row">
                        <p>
                            © {currentYear} Huerta Fundación de Aguascalientes I.B.P. Todos los derechos reservados.
                        </p>
                        <div className="flex gap-6">
                            <Link href="/privacidad" className="transition-colors hover:text-primary-600">
                                Privacidad
                            </Link>
                            <Link href="/terminos" className="transition-colors hover:text-primary-600">
                                Términos
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
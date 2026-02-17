'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { FiMenu, FiX } from 'react-icons/fi'
import { siteConfig } from '@/config/siteConfig'

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const pathname = usePathname()

    const isActive = (path) => pathname === path

    return (
        <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/95 backdrop-blur-sm">
            <nav className="container-custom">
                <div className="flex h-16 items-center justify-between md:h-20">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="flex items-center transition-opacity hover:opacity-80"
                    >
                        <Image
                            src="/images/logo.svg"
                            alt="Huerta Fundación Logo"
                            width={300}
                            height={50}
                            className="h-20 w-auto md:h-15"
                            priority
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden items-center gap-8 md:flex">
                        {siteConfig.navigation.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`text-sm font-medium transition-colors hover:text-pink-700 ${isActive(item.href)
                                    ? 'text-pink-600'
                                    : 'text-neutral-700'
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link href="/donar" className="btn-primary">
                            Donar Ahora
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="rounded-lg p-2 text-neutral-700 transition-colors hover:bg-neutral-100 md:hidden"
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? (
                            <FiX className="h-6 w-6" />
                        ) : (
                            <FiMenu className="h-6 w-6" />
                        )}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {mobileMenuOpen && (
                    <div className="border-t border-neutral-200 py-4 md:hidden">
                        <div className="flex flex-col gap-4">
                            {siteConfig.navigation.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`text-base font-medium transition-colors hover:text-primary-600 ${isActive(item.href)
                                        ? 'text-primary-600'
                                        : 'text-neutral-700'
                                        }`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <Link
                                href="/donar"
                                className="btn-primary mt-2"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Donar Ahora
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    )
}
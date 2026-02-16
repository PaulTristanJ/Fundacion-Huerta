// Configuración general del sitio
export const siteConfig = {
    name: "Huerta Fundación de Aguascalientes",
    description: "Nutriendo el presente, sembrando el futuro. Institución de Beneficencia Privada dedicada a impulsar acciones de apoyo integral en salud, vivienda y bienestar para comunidades en situación de vulnerabilidad.",
    url: "https://huertafundacion.org",
    ogImage: "/images/og-image.jpg",

    // Información de contacto
    contact: {
        email: "contacto@huertafundacion.org",
        phone: "+52 449 123 4567",
        address: "Tableros Bonaterra, Aguascalientes, México",
    },

    // Redes sociales
    social: {
        facebook: "https://facebook.com/huertafundacion",
        twitter: "https://twitter.com/huertafundacion",
        instagram: "https://instagram.com/huertafundacion",
        linkedin: "https://linkedin.com/company/huertafundacion",
    },

    // Navegación principal
    navigation: [
        { name: "Inicio", href: "/" },
        { name: "Sobre Nosotros", href: "/sobre-nosotros" },
        { name: "Programas", href: "/programas" },
        { name: "Cómo Ayudar", href: "/donar" },
        { name: "Contacto", href: "/contacto" },
    ],

    // Programas (para futuro uso dinámico)
    programs: [
        {
            id: "salud",
            title: "Brigadas de Salud Integral",
            description: "Pruebas gratuitas de VIH y Hepatitis C, medicina general, fisioterapia y medicamentos sin costo.",
            icon: "heart",
            color: "error",
        },
        {
            id: "vivienda",
            title: "Vivienda Digna",
            description: "Donación e instalación de láminas y maderas para rehabilitar techos, brindando seguridad inmediata.",
            icon: "book",
            color: "primary",
        },
        {
            id: "carpinteria",
            title: "Taller de Carpintería",
            description: "Capacitación gratuita en carpintería para jóvenes de 15 a 29 años con 100% de materia prima donada.",
            icon: "sprout",
            color: "success",
        },
    ],

    // Metadata por defecto para SEO
    defaultMetadata: {
        title: {
            default: "Huerta Fundación de Aguascalientes | Nutriendo el presente",
            template: "%s | Huerta Fundación",
        },
        description: "Institución de Beneficencia Privada en Aguascalientes dedicada a transformar vidas a través de salud, vivienda digna y educación técnica.",
        keywords: ["fundación", "aguascalientes", "ibp", "beneficencia privada", "salud", "vivienda", "carpintería", "donaciones"],
        authors: [{ name: "Huerta Fundación de Aguascalientes" }],
        creator: "Huerta Fundación",
        publisher: "Huerta Fundación",
        robots: {
            index: true,
            follow: true,
        },
        openGraph: {
            type: "website",
            locale: "es_MX",
            siteName: "Huerta Fundación de Aguascalientes",
        },
        twitter: {
            card: "summary_large_image",
            creator: "@huertafundacion",
        },
    },
};

// Configuración de la API (para futuras llamadas al backend)
export const apiConfig = {
    baseUrl: process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000",
    endpoints: {
        health: "/api/v1/health",
        contact: "/api/v1/contact",
        donations: "/api/v1/donations",  // Futuro
        programs: "/api/v1/programs",    // Futuro
    },
};
// Configuración general del sitio
export const siteConfig = {
    name: "Fundación Huerta",
    description: "Transformando vidas a través de la educación, salud y desarrollo comunitario. Únete a nuestra misión de construir un futuro mejor.",
    url: "https://fundacionesperanza.org",
    ogImage: "/images/og-image.jpg",

    // Información de contacto
    contact: {
        email: "contacto@fundacionesperanza.org",
        phone: "+52 55 1234 5678",
        address: "Av. Reforma 123, Ciudad de México, 06600",
    },

    // Redes sociales
    social: {
        facebook: "https://facebook.com/fundacionesperanza",
        twitter: "https://twitter.com/fundacionesp",
        instagram: "https://instagram.com/fundacionesperanza",
        linkedin: "https://linkedin.com/company/fundacionesperanza",
    },

    // Navegación principal
    navigation: [
        { name: "Inicio", href: "/" },
        { name: "Sobre Nosotros", href: "/sobreNosotros" },
        { name: "Programas", href: "/programas" },
        { name: "Cómo Ayudar", href: "/donar" },
        { name: "Contacto", href: "/contacto" },
    ],

    // Programas (para futuro uso dinámico)
    programs: [
        {
            id: "educacion",
            title: "Educación para Todos",
            description: "Brindamos acceso a educación de calidad para niños y jóvenes en comunidades vulnerables.",
            icon: "book",
            color: "primary",
        },
        {
            id: "salud",
            title: "Salud Comunitaria",
            description: "Programas de atención médica preventiva y campañas de salud en zonas rurales.",
            icon: "heart",
            color: "error",
        },
        {
            id: "desarrollo",
            title: "Desarrollo Sostenible",
            description: "Capacitación en habilidades técnicas y emprendimiento para el desarrollo económico local.",
            icon: "sprout",
            color: "success",
        },
    ],

    // Metadata por defecto para SEO
    defaultMetadata: {
        title: {
            default: "Fundación Esperanza | Transformando Vidas",
            template: "%s | Fundación Esperanza",
        },
        description: "Organización sin fines de lucro dedicada a mejorar la calidad de vida en comunidades vulnerables.",
        keywords: ["fundación", "ong", "educación", "salud", "desarrollo comunitario", "donaciones"],
        authors: [{ name: "Fundación Esperanza" }],
        creator: "Fundación Esperanza",
        publisher: "Fundación Esperanza",
        robots: {
            index: true,
            follow: true,
        },
        openGraph: {
            type: "website",
            locale: "es_MX",
            siteName: "Fundación Esperanza",
        },
        twitter: {
            card: "summary_large_image",
            creator: "@fundacionesp",
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
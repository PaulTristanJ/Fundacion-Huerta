/** @type {import('next').NextConfig} */
const nextConfig = {
    // Configuración de imágenes
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
            },
            // Agregar dominios de CDN o storage cuando se implementen:
            // { protocol: 'https', hostname: 'cdn.fundacionesperanza.org' },
            // { protocol: 'https', hostname: 'storage.googleapis.com' },
        ],
        formats: ['image/avif', 'image/webp'],
    },

    // Variables de entorno públicas
    env: {
        NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
        NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000',
    },

    // Configuración experimental
    experimental: {
        // Habilitar cuando se necesite
        // serverActions: true,
    },

    // Redirects (si son necesarios)
    async redirects() {
        return [
            // Ejemplo: redirigir /donate a /donar
            // {
            //   source: '/donate',
            //   destination: '/donar',
            //   permanent: true,
            // },
        ]
    },

    // Headers de seguridad
    async headers() {
        return [
            {
                source: '/:path*',
                headers: [
                    {
                        key: 'X-DNS-Prefetch-Control',
                        value: 'on'
                    },
                    {
                        key: 'Strict-Transport-Security',
                        value: 'max-age=63072000; includeSubDomains; preload'
                    },
                    {
                        key: 'X-Frame-Options',
                        value: 'SAMEORIGIN'
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff'
                    },
                    {
                        key: 'X-XSS-Protection',
                        value: '1; mode=block'
                    },
                    {
                        key: 'Referrer-Policy',
                        value: 'origin-when-cross-origin'
                    },
                ],
            },
        ]
    },
}

module.exports = nextConfig
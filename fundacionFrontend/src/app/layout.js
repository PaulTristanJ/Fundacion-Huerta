import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import { siteConfig } from '../config/siteConfig.js'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
})

const poppins = Poppins({
    weight: ['600', '700', '800'],
    subsets: ['latin'],
    variable: '--font-poppins',
    display: 'swap',
})

export const metadata = {
    ...siteConfig.defaultMetadata,
    metadataBase: new URL(siteConfig.url),
}

export default function RootLayout({ children }) {
    return (
        <html lang="es" className={`${inter.variable} ${poppins.variable}`}>
            <body className="flex min-h-screen flex-col">
                <Header />
                <main className="flex-1">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    )
}
import HeroSection from '@/components/home/HeroSection'
import MissionSection from '@/components/home/MissionSection'
import ProgramsPreview from '@/components/home/ProgramsPreview'
import StatsSection from '@/components/home/StatsSection'
import CallToAction from '@/components/home/CallToAction'

export const metadata = {
    title: 'Inicio',
    description: 'Únete a nuestra misión de transformar vidas a través de la educación, salud y desarrollo comunitario.',
}

export default function Home() {
    return (
        <>
            <HeroSection />
            <MissionSection />
            <ProgramsPreview />
            <StatsSection />
            <CallToAction />
        </>
    )
}
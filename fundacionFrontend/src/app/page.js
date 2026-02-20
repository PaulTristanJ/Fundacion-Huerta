import HeroSection from '@/components/home/HeroSection'
import ImpactSection from '@/components/home/ImpactSection'
import ProgramsShowcase from '@/components/home/ProgramsShowcase'
import StorySection from '@/components/home/StorySection'
import CallToAction from '@/components/home/CallToAction'
import LogoCarousel from '@/components/home/Logocarousel'

export const metadata = {
  title: 'Inicio',
  description: 'Únete a nuestra misión de transformar vidas a través de la educación, salud y desarrollo comunitario.',
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <ImpactSection />
      <ProgramsShowcase />
      <StorySection />
      <CallToAction />
      <LogoCarousel />
    </>
  )
}
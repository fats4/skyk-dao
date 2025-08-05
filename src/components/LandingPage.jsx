import HeroSection from './HeroSection'
import StatsSection from './StatsSection'
import BenefitsSection from './BenefitsSection'

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <HeroSection />
      <StatsSection />  
      <BenefitsSection />
    </div>
  )
}

export default LandingPage
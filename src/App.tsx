import Hero from './components/Hero';
import FutureSuccess from './components/FutureSuccess';
import BenefitsSection from './components/BenefitsSection';
import SocialProof from './components/SocialProof';
import Storytelling from './components/Storytelling';
import PricingSection from './components/PricingSection';
import Guarantee from './components/Guarantee';
import FinalCTA from './components/FinalCTA';

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Hero />
      <FutureSuccess />
      <BenefitsSection />
      <SocialProof />
      <Storytelling />
      <PricingSection />
      <Guarantee />
      <FinalCTA />
    </div>
  );
}

export default App;

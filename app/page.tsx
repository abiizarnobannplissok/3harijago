import dynamic from 'next/dynamic';
import Hero from '@/components/Hero';

// Lazy load below-the-fold components for better initial load
const FutureSuccess = dynamic(() => import('@/components/FutureSuccess'), { ssr: true });
const BenefitsSection = dynamic(() => import('@/components/BenefitsSection'), { ssr: true });
const SocialProof = dynamic(() => import('@/components/SocialProof'), { ssr: true });
const PricingSection = dynamic(() => import('@/components/PricingSection'), { ssr: true });
const FAQ = dynamic(() => import('@/components/FAQ'), { ssr: true });
const StoryAfterFAQ = dynamic(() => import('@/components/StoryAfterFAQ'), { ssr: true });
const Guarantee = dynamic(() => import('@/components/Guarantee'), { ssr: true });
const FinalCTA = dynamic(() => import('@/components/FinalCTA'), { ssr: true });

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Hero />
      <FutureSuccess />
      <BenefitsSection />
      <SocialProof />
      <PricingSection />
      <FAQ />
      <StoryAfterFAQ />
      <Guarantee />
      <FinalCTA />
    </div>
  );
}

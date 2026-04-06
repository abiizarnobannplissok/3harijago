'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState, memo } from 'react';
import { trackPageView } from '@/lib/tracking';

const Hero = dynamic(() => import('@/components/Hero'));
const FutureSuccess = dynamic(() => import('@/components/FutureSuccess'));
const BenefitsSection = dynamic(() => import('@/components/BenefitsSection'));
const SocialProof = dynamic(() => import('@/components/SocialProof'));
const PricingSection = dynamic(() => import('@/components/PricingSection'));
const FAQ = dynamic(() => import('@/components/FAQ'));
const StoryAfterFAQ = dynamic(() => import('@/components/StoryAfterFAQ'));
const Guarantee = dynamic(() => import('@/components/Guarantee'));
const FinalCTA = dynamic(() => import('@/components/FinalCTA'));

const LoadingFallback = memo(function LoadingFallback() {
  return (
    <div style={{ 
      minHeight: '100px', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      color: '#666',
      fontSize: '14px'
    }}>
      Loading...
    </div>
  );
});

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>
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

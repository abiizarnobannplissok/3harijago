'use client';

import dynamic from 'next/dynamic';

const ThankYou = dynamic(() => import('@/components/ThankYou'));

export default function ThankYouPage() {
  return (
    <div className="min-h-screen overflow-x-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>
      <ThankYou />
    </div>
  );
}

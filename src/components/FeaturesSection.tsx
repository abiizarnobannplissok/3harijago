import React from 'react';

const features = [
  {
    icon: <MessageSquareIcon />,
    title: 'Real-Time Fare Predictions',
    description: 'know when to book to get the best prices.',
    highlight: true,
  },
  {
    icon: <RouteIcon />,
    title: 'Smart Route Optimization',
    description: 'ai suggests faster, cheaper, or more comfortable routes.',
    highlight: false,
  },
  {
    icon: <StarIcon />,
    title: 'Dynamic Loyalty Points Tracking',
    description: 'see your points grow live as you fly and book.',
    highlight: false,
  },
  {
    icon: <BellIcon />,
    title: 'Personalized Flight Alerts',
    description: 'get alerts for price drops on favorite routes.',
    highlight: false,
  },
  {
    icon: <GiftIcon />,
    title: 'Integrated Rewards Redemption',
    description: 'use points for discounts without leaving the site.',
    highlight: false,
  },
  {
    icon: <PlaneIcon />,
    title: 'Airline Comparison Engine',
    description: 'compare 200+ airlines in seconds for the best deal.',
    highlight: false,
  },
  {
    icon: <PhoneIcon />,
    title: 'Seat & Service Recommendations',
    description: 'ai suggests best seats based on your preferences.',
    highlight: false,
  },
  {
    icon: <ShieldIcon />,
    title: 'Secure One-Click Checkout',
    description: 'book flights quickly with secure ai payments.',
    highlight: false,
  },
];

export default function FeaturesSection() {
  return (
    <section style={{
      background: 'linear-gradient(180deg, #eef0ff 0%, #ffffff 40%)',
      padding: '80px 24px 100px',
    }}>
      {/* Badge */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <div style={{
          background: 'white',
          border: '1px solid #e5e7eb',
          borderRadius: '100px',
          padding: '6px 18px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
        }}>
          <span style={{ color: '#6b7280', fontSize: '12px', fontWeight: 500 }}>AI Features Section</span>
        </div>
      </div>

      {/* Heading */}
      <h2 style={{
        textAlign: 'center',
        fontSize: 'clamp(26px, 4vw, 40px)',
        fontWeight: 900,
        color: '#0f172a',
        lineHeight: 1.2,
        margin: '0 0 14px',
      }}>
        AI-Powered Features, Travel<br />
        Effortless With Airlume
      </h2>

      <p style={{
        textAlign: 'center',
        color: '#64748b',
        fontSize: '14px',
        maxWidth: '430px',
        margin: '0 auto 60px',
        lineHeight: 1.7,
      }}>
        enjoy seamless booking, smarter flight predictions, and personalized rewards
        powered by airlume's ai for smoother journeys.
      </p>

      {/* Grid */}
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
        gap: '18px',
      }}>
        {features.map((f, i) => (
          <FeatureCard key={i} {...f} />
        ))}
      </div>
    </section>
  );
}

function FeatureCard({
  icon,
  title,
  description,
  highlight,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  highlight: boolean;
}) {
  return (
    <div style={{
      borderRadius: '20px',
      padding: '24px',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      background: highlight ? 'linear-gradient(135deg, #1d4ed8 0%, #1e40af 100%)' : 'white',
      border: highlight ? 'none' : '1px solid #f1f5f9',
      boxShadow: highlight ? '0 16px 48px rgba(29,78,216,0.35)' : '0 2px 12px rgba(0,0,0,0.05)',
      cursor: 'pointer',
      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
        (e.currentTarget as HTMLDivElement).style.boxShadow = highlight
          ? '0 24px 60px rgba(29,78,216,0.45)'
          : '0 8px 24px rgba(0,0,0,0.1)';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
        (e.currentTarget as HTMLDivElement).style.boxShadow = highlight
          ? '0 16px 48px rgba(29,78,216,0.35)'
          : '0 2px 12px rgba(0,0,0,0.05)';
      }}
    >
      {/* Icon */}
      <div style={{
        width: '42px',
        height: '42px',
        borderRadius: '12px',
        background: highlight ? 'rgba(255,255,255,0.15)' : '#eff6ff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: highlight ? 'white' : '#2563eb',
      }}>
        {icon}
      </div>

      {/* Title */}
      <h3 style={{
        color: highlight ? 'white' : '#0f172a',
        fontSize: '14px',
        fontWeight: 700,
        lineHeight: 1.4,
        margin: 0,
      }}>
        {title}
      </h3>

      {/* Description */}
      <p style={{
        color: highlight ? 'rgba(191,219,254,0.9)' : '#64748b',
        fontSize: '12px',
        lineHeight: 1.6,
        margin: 0,
      }}>
        {description}
      </p>

      {/* Learn more */}
      <div style={{ marginTop: 'auto', paddingTop: '8px' }}>
        <a href="#" style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '5px',
          color: highlight ? 'white' : '#374151',
          fontSize: '12px',
          fontWeight: 600,
          textDecoration: 'none',
        }}>
          Learn more
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      </div>
    </div>
  );
}

// --- Icons ---
function MessageSquareIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    </svg>
  );
}

function RouteIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="19" r="3"/><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"/>
      <circle cx="18" cy="5" r="3"/>
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  );
}

function BellIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
      <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
    </svg>
  );
}

function GiftIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/>
      <line x1="12" y1="22" x2="12" y2="7"/>
      <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/>
      <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/>
    </svg>
  );
}

function PlaneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.67 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.61 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 17z"/>
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  );
}

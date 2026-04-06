'use client';

import Image from 'next/image';
import { useMemo } from 'react';
import { scrollToOrder } from '@/lib/scrollToOrder';

export default function Hero() {
  const streaks = useMemo(() => [...Array(18)], []);
  
  return (
    <section
      style={{
        background: 'linear-gradient(160deg, #1a0800 0%, #7c2600 35%, #c84200 60%, #1a0800 100%)',
        position: 'relative', overflow: 'hidden',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        padding: '40px 16px 60px',
        minHeight: '100dvh',
      }}
    >
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
        <span style={{ fontSize: 'clamp(80px, 18vw, 220px)', color: 'transparent', WebkitTextStroke: '1.5px rgba(255,255,255,0.05)', letterSpacing: '0.1em', lineHeight: 1, fontWeight: 900, textTransform: 'uppercase' }}>KIDS</span>
      </div>

      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        {streaks.map((_, i) => (
        <div key={i} style={{ position: 'absolute', top: 0, bottom: 0, left: `${i * 5.8}%`, width: i % 3 === 0 ? '2px' : '1px', background: `linear-gradient(180deg, transparent 0%, rgba(255,140,30,${i % 2 === 0 ? '0.12' : '0.07'}) 30%, rgba(255,140,30,${i % 2 === 0 ? '0.2' : '0.1'}) 65%, transparent 100%)`, filter: 'blur(1px)' }} />
        ))}
      </div>

      <div style={{ position: 'absolute', width: '700px', height: '500px', top: 0, left: '50%', transform: 'translateX(-50%)', background: 'radial-gradient(ellipse, rgba(200,80,0,0.4) 0%, transparent 65%)', filter: 'blur(40px)', pointerEvents: 'none' }} />

      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', maxWidth: '820px', paddingTop: '24px', gap: '20px' }}>

        <h1 style={{ fontSize: 'clamp(26px, 5vw, 58px)', fontWeight: 900, color: 'white', textAlign: 'center', lineHeight: 1.15, margin: 0, maxWidth: '760px' }}>
          Ajarkan Si Kecil Bahasa Inggris<br />
          <span style={{ background: 'linear-gradient(90deg, #ff8c00, #ffb347)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Tanpa Kursus Mahal, Dari Rumah!
          </span>
        </h1>

        <p style={{ color: 'rgba(255,220,180,0.9)', fontSize: 'clamp(13px, 1.8vw, 16px)', textAlign: 'center', maxWidth: '520px', lineHeight: 1.5, margin: '8px 0' }}>
          Program mini 3 hari yang bikin anak naik level pelan-pelan: mulai dari kenal lewat gambar, lanjut main kosakata, lalu latihan baca & tulis kata pertamanya.
        </p>

        <div
          style={{
            width: 'clamp(220px, 75vw, 420px)',
            maxWidth: '100%',
            borderRadius: '24px',
            boxShadow: '0 24px 70px rgba(0,0,0,0.6)',
            overflow: 'hidden',
            marginBottom: '8px',
          }}
        >
          <Image 
            src="/imghero-optimized.webp" 
            alt="3 Hari Jago Inggris"
            width={503}
            height={436}
            priority
            style={{ 
              width: '100%', 
              height: 'auto',
              display: 'block',
            }} 
          />
        </div>

        <a
          href="#order"
          onClick={(e) => scrollToOrder(e)}
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: 'linear-gradient(135deg, #ff8c00, #e65c00)',
            color: 'white', fontWeight: 900, fontSize: 'clamp(14px, 2vw, 17px)',
            border: 'none', borderRadius: '100px', padding: '16px 32px',
            cursor: 'pointer', boxShadow: '0 8px 36px rgba(255,100,0,0.65)',
            textDecoration: 'none', width: '100%', maxWidth: '320px', textAlign: 'center',
            marginTop: '-8px',
          }}
        >
          <span style={{ textAlign: 'center' }}>Saya Mau Mulai 3 Hari Jago Inggris</span>
          <span style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(255,255,255,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginLeft: '10px' }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="white"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" /></svg>
          </span>
        </a>

      </div>

      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '60px', background: 'linear-gradient(0deg, #fff8f2 0%, transparent 100%)', pointerEvents: 'none' }} />
    </section>
  );
}

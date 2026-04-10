'use client';

import { useMemo } from 'react';
import { scrollToOrder } from '@/lib/scrollToOrder';

export default function FinalCTA() {
    const streaks = useMemo(() => [...Array(12)], []);
    
    return (
        <section style={{ background: 'linear-gradient(160deg, #1a0800 0%, #7c2600 35%, #c84200 70%, #1a0800 100%)', padding: '24px 24px', position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
            <div style={{ position: 'absolute', top: '-120px', left: '50%', transform: 'translateX(-50%)', width: '600px', height: '400px', background: 'radial-gradient(ellipse, rgba(255,140,0,0.2) 0%, transparent 65%)', filter: 'blur(40px)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
                {streaks.map((_, i) => (
                    <div key={i} style={{ position: 'absolute', top: 0, bottom: 0, left: `${i * 8.5}%`, width: i % 3 === 0 ? '2px' : '1px', background: `rgba(255,140,30,${i % 2 === 0 ? '0.06' : '0.03'})` }} />
                ))}
            </div>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,220,0,0.12)', border: '1px solid rgba(255,220,0,0.3)', borderRadius: '100px', padding: '8px 20px', marginBottom: '20px', position: 'relative', zIndex: 1 }}>
                <span style={{ color: '#ffe066', fontWeight: 800, fontSize: '13px' }}>⏳ Harga Spesial Rp 99.000 — Gak Akan Segini Terus, Bun!</span>
            </div>

            <h2 style={{ fontSize: 'clamp(26px, 5vw, 50px)', fontWeight: 900, color: 'white', lineHeight: 1.15, margin: '0 0 16px', maxWidth: '720px', marginLeft: 'auto', marginRight: 'auto', position: 'relative', zIndex: 1 }}>
                Jangan Tunggu Sampai Anak Ketinggalan.<br />
                <span style={{ background: 'linear-gradient(90deg, #ff8c00, #ffb347)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Mulai dari Hari Ini, Bunda!
                </span>
            </h2>

            <p style={{ color: 'rgba(255,220,180,0.8)', fontSize: '17px', maxWidth: '560px', margin: '0 auto 12px', lineHeight: 1.8, position: 'relative', zIndex: 1 }}>
                Si Kecil gak butuh les jutaan untuk mulai jago Inggris. Yang dia butuh itu Bundanya — dan worksheet yang beneran seru. Cuma 15 menit sehari, tapi dampaknya bisa seumur hidup. ❤️
            </p>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '16px', margin: '20px 0', position: 'relative', zIndex: 1, flexWrap: 'wrap', justifyContent: 'center' }}>
                <span style={{ color: 'rgba(255,200,150,0.45)', fontSize: '20px', textDecoration: 'line-through' }}>Rp 423.000</span>
                <div style={{ textAlign: 'center' }}>
                    <p style={{ color: 'rgba(255,200,150,0.55)', fontSize: '11px', margin: '0 0 2px', textTransform: 'uppercase', letterSpacing: '1px' }}>Harga Spesial</p>
                    <span style={{ color: 'white', fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 900 }}>Rp 99.000</span>
                </div>
                <span style={{ background: '#4ade80', color: '#064e3b', fontSize: '13px', fontWeight: 800, padding: '5px 14px', borderRadius: '100px' }}>Hemat 77%</span>
            </div>

            <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px' }}>
                <a
                    href="#order"
                    onClick={(e) => scrollToOrder(e)}
                    style={{
                        display: 'flex', alignItems: 'center', gap: '14px',
                        background: 'linear-gradient(135deg, #ff8c00, #e65c00)',
                        color: 'white', fontWeight: 900, fontSize: 'clamp(15px, 2vw, 18px)',
                        border: 'none', borderRadius: '100px', padding: '20px 44px',
                        cursor: 'pointer', boxShadow: '0 12px 48px rgba(255,100,0,0.65)',
                        textDecoration: 'none',
                    }}
                >
                    🛒 Ya! Saya Mau Si Kecil Mulai Jago Inggris Sekarang!
                    <span style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" /></svg>
                    </span>
                </a>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '100px', padding: '10px 22px' }}>
                    <div style={{ display: 'flex' }}>
                        {['#ff8c00', '#ffb347', '#ff6a00', '#e65c00'].map((c, i) => (
                            <div key={i} style={{ width: '20px', height: '20px', borderRadius: '50%', background: c, border: '2px solid rgba(255,255,255,0.2)', marginLeft: i > 0 ? '-6px' : '0' }} />
                        ))}
                    </div>
                    <span style={{ color: 'rgba(255,220,180,0.8)', fontSize: '13px' }}>
                        <strong style={{ color: '#ffb347' }}>63 Bunda</strong> beli worksheet ini dalam 24 jam terakhir
                    </span>
                </div>
            </div>

            <div style={{ marginTop: '60px', paddingTop: '28px', borderTop: '1px solid rgba(255,255,255,0.08)', position: 'relative', zIndex: 1 }}>
                <p style={{ color: 'rgba(255,200,150,0.35)', fontSize: '13px', margin: 0 }}>
                    © 2024 3 Hari Jago Inggris · Hak Cipta Dilindungi
                </p>
            </div>
        </section>
    );
}

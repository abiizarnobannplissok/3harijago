'use client';

import { scrollToOrder } from '@/lib/scrollToOrder';

export default function FutureSuccess() {
    return (
        <section style={{ background: '#ffffff', padding: '24px 24px 12px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                <div style={{ display: 'inline-flex', background: '#fff3e8', border: '1px solid #ffd0a0', borderRadius: '100px', padding: '6px 18px', marginBottom: '12px' }}>
                    <span style={{ color: '#e65c00', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>Bekal Masa Depan si Kecil</span>
                </div>

                <h2 style={{ fontSize: 'clamp(20px, 3.5vw, 28px)', fontWeight: 900, color: '#1a0800', lineHeight: 1.2, margin: '0 0 10px' }}>
                    Bahasa Inggris Bukan Sekadar Pelajaran,<br />
                    <span style={{ color: '#e65c00' }}>Tapi Kunci Sukses si Kecil di Masa Depan.</span>
                </h2>

                <p style={{ color: '#64748b', fontSize: '14px', lineHeight: 1.6, maxWidth: '640px', margin: '0 auto 14px' }}>
                    Sekarang banyak hal pakai bahasa Inggris. Kalau anak baru mulai nanti, biasanya lebih berat karena harus ngejar. Kalau dibiasakan dari kecil, belajarnya jadi lebih ringan dan anak lebih percaya diri.
                </p>

                <p style={{ color: '#1a0800', fontSize: '15px', fontWeight: 700, maxWidth: '600px', margin: '0 auto 20px', lineHeight: 1.6 }}>
                    Cukup ikuti worksheet 3 hari—praktis, fun, dan mudah mendampingi.
                </p>

                <a
                    href="#order"
                    onClick={(e) => scrollToOrder(e)}
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        background: 'linear-gradient(135deg, #ff8c00, #e65c00)',
                        color: 'white',
                        fontWeight: 800,
                        fontSize: '14px',
                        padding: '12px 24px',
                        borderRadius: '100px',
                        textDecoration: 'none',
                        boxShadow: '0 4px 16px rgba(255,100,0,0.4)',
                    }}
                >
                    Saya Mau Mulai 3 Hari Jago Inggris
                </a>


            </div>
        </section>
    );
}

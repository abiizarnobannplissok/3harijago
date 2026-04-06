'use client';

import { scrollToOrder } from '@/lib/scrollToOrder';

const testimonials = [
    {
        name: 'Bunda Rizka',
        role: 'Jakarta (Anak 4 tahun)',
        avatar: '👩‍👧',
        rating: 5,
        text: '"Dulu anak saya susah nangis kalau diajak belajar. Setelah pakai worksheet ini, dia malah antusias karena banyak gambar dan aktivitasnya seru."',
        result: 'Anak jadi lebih mau belajar & kosakata nambah',
    },
    {
        name: 'Bunda Herni',
        role: 'Surabaya (Anak 7 tahun)',
        avatar: '👩‍💼',
        rating: 5,
        text: '"Saya working mom, jadi butuh yang singkat. 15 menit sebelum tidur cukup. Anak jadi lebih berani baca dan mulai nulis."',
        result: 'Progres terlihat tanpa les mahal',
    },
    {
        name: 'Bunda Sella',
        role: 'Bandung (Anak 9 tahun)',
        avatar: '👩‍🏫',
        rating: 5,
        text: '"Bahasa Inggris saya biasa aja, tapi worksheet ini gampang diikuti. Anak jadi lebih pede baca keras-keras."',
        result: 'Anak makin percaya diri',
    },
];

export default function SocialProof() {
    return (
        <section style={{ background: 'linear-gradient(135deg, #1a0800 0%, #3d1200 100%)', padding: '24px 24px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,140,0,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />

            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
                <div style={{ background: 'rgba(255,140,0,0.15)', border: '1px solid rgba(255,140,0,0.35)', borderRadius: '100px', padding: '6px 20px' }}>
                    <span style={{ color: '#ffb347', fontSize: '12px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase' }}>💬 Kata Para Bunda</span>
                </div>
            </div>

            <h2 style={{ textAlign: 'center', fontSize: 'clamp(24px, 4vw, 38px)', fontWeight: 900, color: 'white', lineHeight: 1.25, margin: '0 0 10px' }}>
                Para Bunda Sudah Buktikan —<br />
                <span style={{ color: '#ffb347' }}>Anak Mereka Makin Jago Inggris!</span>
            </h2>

            <p style={{ textAlign: 'center', color: 'rgba(255,200,150,0.7)', fontSize: '14px', maxWidth: '440px', margin: '0 auto 24px', lineHeight: 1.7 }}>
                Bukan janji kosong. Ini cerita nyata dari ribuan orang tua yang sudah merasakan perubahannya.
            </p>

            <div style={{ maxWidth: '960px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
                {testimonials.map((t, i) => (
                    <div key={i} style={{ background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(16px)', borderRadius: '20px', padding: '24px', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 8px 32px rgba(0,0,0,0.3)' }}>
                        <div style={{ display: 'flex', gap: '2px', marginBottom: '12px' }}>
                            {[...Array(t.rating)].map((_, s) => (
                                <svg key={s} width="14" height="14" viewBox="0 0 24 24" fill="#ffb347">
                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                </svg>
                            ))}
                        </div>
                        <p style={{ color: '#ffffff', fontSize: '15px', lineHeight: 1.7, margin: '0 0 16px', fontWeight: 400 }}>{t.text}</p>
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(255,140,0,0.15)', border: '1px solid rgba(255,140,0,0.35)', borderRadius: '100px', padding: '4px 12px', marginBottom: '16px' }}>
                            <span style={{ color: '#ffb347', fontSize: '11px', fontWeight: 600 }}>✅ {t.result}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <div>
                                <p style={{ color: 'white', fontSize: '13px', fontWeight: 700, margin: 0 }}>{t.name}</p>
                                <p style={{ color: 'rgba(255,200,150,0.55)', fontSize: '11px', margin: 0 }}>{t.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '32px' }}>
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
                        padding: '14px 28px',
                        borderRadius: '100px',
                        textDecoration: 'none',
                        boxShadow: '0 6px 24px rgba(255,100,0,0.5)',
                    }}
                >
                    Ambil Paket yang Dipakai Para Bundda
                </a>
            </div>
        </section>
    );
}

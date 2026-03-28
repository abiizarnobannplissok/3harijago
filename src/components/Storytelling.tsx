import { useMemo } from 'react';
import { scrollToOrder } from '../utils/scrollToOrder';

export default function Storytelling() {
    const lines = useMemo(() => [...Array(6)], []);
    
    return (
        <section style={{ background: '#fff8f2', padding: '24px 24px' }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', alignItems: 'start' }}>

                {/* Left - Pain points card */}
                <div>
                    <div style={{ borderRadius: '20px', background: 'linear-gradient(160deg, #3d1200 0%, #1a0800 100%)', padding: '28px', boxShadow: '0 20px 60px rgba(0,0,0,0.2)', position: 'relative', overflow: 'hidden' }}>
                        {lines.map((_, i) => <div key={i} style={{ position: 'absolute', left: 0, right: 0, top: `${i * 55}px`, height: '1px', background: 'rgba(255,255,255,0.07)' }} />)}
                        <h2 style={{ fontSize: 'clamp(20px, 3vw, 24px)', fontWeight: 900, color: 'white', lineHeight: 1.3, margin: '0 0 16px', textAlign: 'center' }}>
                            Para Bunda Pernah Mengeluh —<br />
                            <span style={{ color: '#ffb347' }}>"Anak Susah Sekali Diajak Belajar"</span>
                        </h2>
                        {[
                            '"Anak susah fokus belajar, bahkan bahasa Inggris"',
                            '"Biaya les terlalu mahal, takut anak ketinggalan"',
                            '"Aku gak bisa bahasa Inggris sama sekali, gimana mau ngajarin anak? 😩"',
                            '"Anak masih belum kenal huruf dan kosakata Inggris, padahal teman-temannya udah bisa"',
                            '"Tidak tahu harus mulai dari mana untuk anak seusia ini"',
                        ].map((item, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '10px', position: 'relative', zIndex: 1 }}>
                                <span style={{ color: 'rgba(255,200,180,0.7)', fontSize: '13px', flexShrink: 0 }}>✗</span>
                                <span style={{ color: 'rgba(255,220,200,0.85)', fontSize: '13px', lineHeight: 1.5 }}>{item}</span>
                            </div>
                        ))}
                    </div>

                    {/* After result — below, not overlapping */}
                    <div style={{ marginTop: '16px', background: 'white', borderRadius: '16px', padding: '16px 20px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', border: '2px solid #ffe4cc', display: 'flex', alignItems: 'center', gap: '14px' }}>
                        <div style={{ fontSize: '32px' }}>🎉</div>
                        <div style={{ flex: 1 }}>
                            <p style={{ color: '#1a0800', fontSize: '13px', fontWeight: 800, margin: '0 0 2px' }}>Setelah Pakai Worksheet:</p>
                            <p style={{ color: '#e65c00', fontSize: '13px', margin: 0, fontWeight: 600 }}>Anak semangat minta belajar sendiri!</p>
                        </div>
                    </div>
                    
                    <div style={{ marginTop: '16px', textAlign: 'center' }}>
                        <a
                            href="javascript:void(0)"
                            onClick={scrollToOrder}
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
                </div>

                {/* Right - Story */}
                <div>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#fff3e8', border: '1px solid #ffd0a0', borderRadius: '100px', padding: '6px 16px', marginBottom: '20px' }}>
                        <span>👩‍👧</span>
                        <span style={{ color: '#e65c00', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>Dari Bundda untuk Bundda</span>
                    </div>

                    <h2 style={{ fontSize: 'clamp(22px, 3.5vw, 34px)', fontWeight: 900, color: '#1a0800', lineHeight: 1.25, margin: '0 0 14px' }}>
                        "Anak Saya Gampang Bosan — Sampai Coba Cara Ini"
                    </h2>

                    <p style={{ color: '#64748b', fontSize: '14px', lineHeight: 1.85, margin: '0 0 14px' }}>
                        <strong style={{ color: '#1a0800' }}>Bundda Mira (32), Yogyakarta</strong>, punya anak 6 tahun yang super aktif dan gampang terdistraksi. Waktu ikut les, biayanya terasa berat—tapi hasilnya nggak sebanding karena anaknya nggak enjoy dan jadi makin males belajar.
                    </p>

                    <p style={{ color: '#64748b', fontSize: '14px', lineHeight: 1.85, margin: '0 0 20px' }}>
                        Akhirnya Bundda Mira coba Worksheet "3 Hari Jago Inggris" di rumah. Yang bikin kaget, anaknya malah mulai bilang: <strong style={{ color: '#1a0800' }}>"Bundda, belajar yang itu lagi!"</strong> Soalnya aktivitasnya bukan hafalan yang bikin tegang, tapi gambar warna-warni, mewarnai, word search, dan matching game—jadi anak merasa kayak main.
                    </p>

                    <p style={{ color: '#e65c00', fontSize: '14px', fontWeight: 700, margin: '0 0 10px' }}>Yang Bundda Mira suka:</p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '22px' }}>
                        {[
                            'Aktivitasnya memang anak suka: mewarnai, cari kata, cocokkan gambar',
                            'Bundda nggak perlu jago Inggris—tinggal ikuti panduannya',
                            'Cuma 15 menit sehari, tapi jadi quality time yang kerasa',
                            'Belajarnya bertahap dan urut, jadi anak nggak kaget',
                        ].map((item, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                                <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'linear-gradient(135deg, #ff8c00, #e65c00)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="white"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /></svg>
                                </div>
                                <span style={{ color: '#374151', fontSize: '14px', lineHeight: 1.6 }}>{item}</span>
                            </div>
                        ))}
                    </div>

                    <p style={{ color: '#e65c00', fontSize: '14px', fontWeight: 700, margin: '0 0 10px' }}>Kesimpulan Bundda Mira:</p>

                    <p style={{ color: '#64748b', fontSize: '13px', fontStyle: 'italic', lineHeight: 1.7, borderLeft: '3px solid #ff8c00', paddingLeft: '14px', margin: '0 0 16px' }}>
                        "Anak tuh bukan butuh les mahal. Yang dia butuh itu cara belajar yang seru—dan waktu sebentar tapi rutin bareng Bunddanya."
                    </p>

                    <a
                        href="javascript:void(0)"
                        onClick={scrollToOrder}
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
            </div>
        </section>
    );
}

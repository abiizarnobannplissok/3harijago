export default function Storytelling() {
    return (
        <section style={{ background: '#fff8f2', padding: '24px 24px' }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', alignItems: 'start' }}>

                {/* Left - Pain points card */}
                <div>
                    <div style={{ borderRadius: '20px', background: 'linear-gradient(160deg, #3d1200 0%, #1a0800 100%)', padding: '28px', boxShadow: '0 20px 60px rgba(0,0,0,0.2)', position: 'relative', overflow: 'hidden' }}>
                        {[...Array(6)].map((_, i) => <div key={i} style={{ position: 'absolute', left: 0, right: 0, top: `${i * 55}px`, height: '1px', background: 'rgba(255,255,255,0.07)' }} />)}
                        <h2 style={{ fontSize: 'clamp(20px, 3vw, 24px)', fontWeight: 900, color: 'white', lineHeight: 1.3, margin: '0 0 16px', textAlign: 'center' }}>
                            Para Bunda Pernah Mengeluh —<br />
                            <span style={{ color: '#ffb347' }}>"Anak Susah Sekali Diajak Belajar"</span>
                        </h2>
                        {[
                            '"Anak susah fokus belajar, apalagi bahasa Inggris"',
                            '"Biaya les terlalu mahal, takut anak ketinggalan"',
                            '"Saya tidak bisa bahasa Inggris, gimana mau ngajarin?"',
                            '"Nilai bahasa Inggris anak di sekolah masih rendah"',
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
                        <div>
                            <p style={{ color: '#1a0800', fontSize: '13px', fontWeight: 800, margin: '0 0 2px' }}>Setelah Pakai Worksheet:</p>
                            <p style={{ color: '#e65c00', fontSize: '13px', margin: 0, fontWeight: 600 }}>Anak semangat minta belajar sendiri!</p>
                        </div>
                    </div>
                </div>

                {/* Right - Story */}
                <div>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#fff3e8', border: '1px solid #ffd0a0', borderRadius: '100px', padding: '6px 16px', marginBottom: '20px' }}>
                        <span>👩‍👧</span>
                        <span style={{ color: '#e65c00', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>Dari Bunda untuk Bunda</span>
                    </div>

                    <h2 style={{ fontSize: 'clamp(22px, 3.5vw, 34px)', fontWeight: 900, color: '#1a0800', lineHeight: 1.25, margin: '0 0 14px' }}>
                        "Anak Saya Benci Belajar — Sampai Kami Coba Cara Ini"
                    </h2>

                    <p style={{ color: '#64748b', fontSize: '14px', lineHeight: 1.85, margin: '0 0 14px' }}>
                        <strong style={{ color: '#1a0800' }}>Bunda Mira, 32 tahun, dari Yogyakarta</strong>, punya anak 6 tahun yang sangat aktif dan susah fokus. Biaya les yang mahal pun terasa sia-sia karena anaknya tidak enjoy.
                    </p>

                    <p style={{ color: '#64748b', fontSize: '14px', lineHeight: 1.85, margin: '0 0 20px' }}>
                        Setelah mencoba worksheet ini, anaknya <strong style={{ color: '#1a0800' }}>justru yang minta belajar duluan setiap malam</strong> — karena ada gambar warna-warni, lagu, dan teka-teki. Bukan hafalan membosankan.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '22px' }}>
                        {[
                            'Materi visual & fun, menyesuaikan cara berpikir anak',
                            'Tidak perlu Bunda jago bahasa Inggris — ada panduan lengkap',
                            'Jadi aktivitas bonding Bunda & si Kecil setiap hari',
                            'Fondasi kuat sejak dini = anak PD di sekolah',
                        ].map((item, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                                <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'linear-gradient(135deg, #ff8c00, #e65c00)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="white"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /></svg>
                                </div>
                                <span style={{ color: '#374151', fontSize: '14px', lineHeight: 1.6 }}>{item}</span>
                            </div>
                        ))}
                    </div>

                    <p style={{ color: '#64748b', fontSize: '13px', fontStyle: 'italic', lineHeight: 1.7, borderLeft: '3px solid #ff8c00', paddingLeft: '14px', margin: 0 }}>
                        "Investasi terbaik bukan kursus mahal — tapi <strong style={{ color: '#1a0800' }}>metode tepat bersama orang tua.</strong>"
                    </p>
                </div>
            </div>
        </section>
    );
}

import { useState } from 'react';

const usiaOptions = [
    '2-3 tahun (Starter)',
    '4-6 tahun (Beginner)',
    '7-10 tahun (Explorer)',
];

export default function PricingSection() {
    const [nama, setNama] = useState('');
    const [wa, setWa] = useState('');
    const [usia, setUsia] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const pesan = `Halo! Saya mau pesan Worksheet 3 Hari Jago Inggris 📚%0ANama: ${nama}%0AUsia Anak: ${usia}%0ASudah siap transfer Rp 99.000!`;
        window.open(`https://wa.me/6281234567890?text=${pesan}`, '_blank');
    };

    const inputStyle: React.CSSProperties = {
        width: '100%', padding: '13px 16px', borderRadius: '10px',
        border: '1.5px solid rgba(255,255,255,0.25)', background: 'rgba(255,255,255,0.12)',
        color: 'white', fontSize: '14px', outline: 'none',
        backdropFilter: 'blur(8px)',
    };

    return (
        <section
            style={{
                background: '#ffffff',
                padding: '24px 20px',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Bg decoration */}
            <div style={{ position: 'absolute', top: '-80px', left: '-80px', width: '350px', height: '350px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', bottom: '-80px', right: '-80px', width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(255,255,255,0.04)', pointerEvents: 'none' }} />

            <div
                style={{
                    maxWidth: '860px', margin: '0 auto',
                    background: 'linear-gradient(160deg, #3d1200 0%, #1a0800 100%)',
                    backdropFilter: 'blur(20px)',
                    borderRadius: '24px', overflow: 'hidden',
                    border: '1px solid rgba(255,255,255,0.12)',
                    boxShadow: '0 24px 80px rgba(0,0,0,0.5)',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                }}
            >
                {/* LEFT — Package details */}
                <div style={{ padding: '30px 28px', borderRight: '1px solid rgba(255,255,255,0.1)' }}> {/* Reduced padding */}
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(255,220,0,0.2)', border: '1px solid rgba(255,220,0,0.35)', borderRadius: '100px', padding: '5px 14px', marginBottom: '12px' }}> {/* Reduced margin-bottom */}
                        <span style={{ color: '#ffe066', fontSize: '11px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase' }}>🏆 Paket Lengkap Premium</span>
                    </div>

                    <h3 style={{ color: 'white', fontSize: 'clamp(22px, 3vw, 28px)', fontWeight: 900, lineHeight: 1.2, margin: '0 0 16px' }}>
                        Worksheet 3 Hari<br />Jago Inggris
                    </h3>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}> {/* Reduced gap and margin-bottom */}
                        {[
                            '📘 3 Paket Worksheet Lengkap (Hari 1, 2, 3)',
                            '🎨 150+ Halaman Penuh Warna & Gambar Lucu',
                            '🎵 Bonus: Lagu Alphabet Versi Audio',
                            '📋 Bonus: Panduan Bunda Mendampingi Belajar',
                            '🏅 Bonus: Sertifikat Digital untuk Si Kecil',
                            '♾️ Akses Seumur Hidup — Bisa Dipakai Terus!',
                        ].map((item, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                                <span style={{ color: 'rgba(255,230,200,0.6)', fontSize: '13px', flexShrink: 0 }}>✓</span>
                                <span style={{ color: 'rgba(255,230,210,0.9)', fontSize: '13px', lineHeight: 1.5 }}>{item}</span>
                            </div>
                        ))}
                    </div>

                    {/* Price */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                        <span style={{ color: 'rgba(255,220,180,0.5)', fontSize: '18px', textDecoration: 'line-through', fontWeight: 600 }}>Rp 150.000</span>
                        <span style={{ background: '#facc15', color: '#1a0800', fontSize: '12px', fontWeight: 800, padding: '3px 10px', borderRadius: '100px' }}>HEMAT 34%</span>
                    </div>
                    <p style={{ color: 'white', fontSize: 'clamp(36px, 5vw, 48px)', fontWeight: 900, margin: '4px 0 6px', lineHeight: 1 }}>Rp 99.000</p>
                    <p style={{ color: 'rgba(255,220,180,0.6)', fontSize: '12px', margin: 0 }}>⏰ Sisa slot: hanya untuk 500 Bunda pertama</p>
                </div>

                {/* RIGHT — Order form */}
                <div style={{ padding: '30px 28px' }}> {/* Reduced padding */}
                    <h4 style={{ color: 'white', fontSize: '20px', fontWeight: 800, margin: '0 0 16px' }}>
                        🎁 Pesan Paket Lengkap Sekarang
                    </h4>

                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <input
                            type="text" required placeholder="Nama Lengkap Bunda"
                            value={nama} onChange={e => setNama(e.target.value)}
                            style={inputStyle}
                            onFocus={e => { (e.target as HTMLInputElement).style.border = '1.5px solid rgba(255,200,0,0.6)'; }}
                            onBlur={e => { (e.target as HTMLInputElement).style.border = '1.5px solid rgba(255,255,255,0.25)'; }}
                        />
                        <input
                            type="tel" required placeholder="No. WhatsApp Aktif"
                            value={wa} onChange={e => setWa(e.target.value)}
                            style={inputStyle}
                            onFocus={e => { (e.target as HTMLInputElement).style.border = '1.5px solid rgba(255,200,0,0.6)'; }}
                            onBlur={e => { (e.target as HTMLInputElement).style.border = '1.5px solid rgba(255,255,255,0.25)'; }}
                        />
                        <select
                            required value={usia} onChange={e => setUsia(e.target.value)}
                            style={{ ...inputStyle, appearance: 'none' }}
                        >
                            <option value="" disabled style={{ background: '#7c2600' }}>Usia Anak</option>
                            {usiaOptions.map((o, i) => <option key={i} value={o} style={{ background: '#7c2600' }}>{o}</option>)}
                        </select>

                        <button
                            type="submit"
                            style={{
                                width: '100%', padding: '16px',
                                background: 'linear-gradient(135deg, #facc15, #f59e0b)',
                                border: 'none', borderRadius: '10px',
                                color: '#1a0800', fontWeight: 900, fontSize: '15px',
                                cursor: 'pointer', marginTop: '4px',
                                boxShadow: '0 8px 24px rgba(250,204,21,0.4)',
                                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                            }}
                            onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)'; (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 12px 32px rgba(250,204,21,0.55)'; }}
                            onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 8px 24px rgba(250,204,21,0.4)'; }}
                        >
                            🎁 AMBIL SEKARANG — Rp 99.000
                        </button>
                    </form>

                    <p style={{ color: 'rgba(255,220,180,0.55)', fontSize: '12px', textAlign: 'center', margin: '12px 0 14px' }}>
                        🔒 Data Anda aman. Worksheet dikirim via WhatsApp/Email.
                    </p>

                    <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
                        {['✓ 100% Produk Digital', '⚡ Akses Instan', '🛡️ Aman'].map((badge, i) => (
                            <span key={i} style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '100px', padding: '5px 12px', color: 'rgba(255,230,200,0.8)', fontSize: '11px', fontWeight: 600 }}>{badge}</span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

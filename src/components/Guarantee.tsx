import { scrollToOrder } from '../utils/scrollToOrder';

export default function Guarantee() {
    return (
        <section style={{ background: 'linear-gradient(180deg, #ffffff 0%, #fff3e8 100%)', padding: '40px 24px' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto', background: 'white', borderRadius: '28px', padding: 'clamp(24px, 5vw, 60px)', boxShadow: '0 20px 60px rgba(230,92,0,0.12)', border: '2px solid #ffe4cc', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: '-60px', left: '50%', transform: 'translateX(-50%)', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,140,0,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />

                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                    <div style={{ display: 'inline-flex', background: '#fff3e8', border: '1px solid #ffd0a0', borderRadius: '100px', padding: '6px 18px' }}>
                        <span style={{ color: '#e65c00', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>Kepuasan Bunda Prioritas Kami</span>
                    </div>
                </div>

                <h2 style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 900, color: '#1a0800', lineHeight: 1.25, margin: '0 0 18px', textAlign: 'center' }}>
                    Kepuasan Bunda Prioritas Kami.<br />
                    <span style={{ color: '#e65c00' }}>Materi dibuat rapi, jelas, dan mudah dipakai untuk belajar di rumah.</span>
                </h2>

                <p style={{ color: '#64748b', fontSize: '16px', lineHeight: 1.8, maxWidth: '600px', margin: '0 auto 32px', textAlign: 'center' }}>
                    Kalau Bunda mengalami kendala akses file atau file tidak bisa dibuka, tim kami <strong>siap bantu sampai beres</strong>. Hubungi kami kapan saja!
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '20px', marginBottom: '32px' }}>
                    {[
                        { icon: '💎', label: 'Materi\nKualitas Premium' },
                        { icon: '💳', label: 'Pembayaran\n100% Aman' },
                        { icon: '⚡', label: 'Akses Instan\nSetelah Bayar' },
                        { icon: '📱', label: 'Bisa di HP,\nTablet & Laptop' },
                    ].map((item, i) => (
                        <div key={i} style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '28px', marginBottom: '6px' }}>{item.icon}</div>
                            <p style={{ color: '#374151', fontSize: '12px', fontWeight: 600, margin: 0, lineHeight: 1.4, whiteSpace: 'pre-line' }}>{item.label}</p>
                        </div>
                    ))}
                </div>

                <div style={{ background: '#fff8f2', borderRadius: '14px', padding: '20px 24px', border: '1px solid #ffe0c0', textAlign: 'left' }}>
                    <p style={{ color: '#e65c00', fontSize: '14px', fontWeight: 700, margin: '0 0 8px' }}>💬 Komitmen kami:</p>
                    <p style={{ color: '#64748b', fontSize: '15px', fontStyle: 'italic', margin: '0 0 16px', lineHeight: 1.7 }}>
                        "Kalau ada masalah teknis (link/file), hubungi kami—kami bantu cepat."
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
                        Oke, Saya Siap Ambil Paketnya
                    </a>
                </div>
            </div>
        </section>
    );
}

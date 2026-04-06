'use client';

import { scrollToOrder } from '@/lib/scrollToOrder';

export default function StoryAfterFAQ() {
    return (
        <section style={{ background: '#fff8f2', padding: '40px 24px' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#fff3e8', border: '1px solid #ffd0a0', borderRadius: '100px', padding: '6px 16px', marginBottom: '20px' }}>
                    <span>👩‍👧</span>
                    <span style={{ color: '#e65c00', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>Dari Bundda untuk Bundda</span>
                </div>

                <h2 style={{ fontSize: 'clamp(22px, 4vw, 32px)', fontWeight: 900, color: '#1a0800', lineHeight: 1.25, margin: '0 0 16px' }}>
                    "Anak Saya Gampang Bosan — sampai Coba Cara Ini"
                </h2>

                <div style={{ textAlign: 'left', marginBottom: '24px' }}>
                    <p style={{ color: '#64748b', fontSize: '14px', lineHeight: 1.8, marginBottom: '12px' }}>
                        <strong style={{ color: '#1a0800' }}>Bundda Mira (32), Yogyakarta</strong>, punya anak 6 tahun yang super aktif dan geologic terdistraksi. Waktu ikut les, biayanya terasa berat—tapi hasilnya nggak sebanding karena anaknya nggak enjoy dan jadi makin males belajar.
                    </p>
                    <p style={{ color: '#64748b', fontSize: '14px', lineHeight: 1.8, marginBottom: '16px' }}>
                        Akhirnya Bundda Mira coba Worksheet "3 Hari Jago Inggris" di rumah. Yang bikin kaget, anaknya malah mulai bilang: <strong style={{ color: '#1a0800' }}>"Bundda, belajar yang itu lagi!"</strong> Soalnya aktivitasnya bukan hafalan yang bikin tegang, tapi gambar warna-warni, mewarnai, word search, dan matching game—jadi anak merasa kayak main.
                    </p>

                    <p style={{ color: '#e65c00', fontSize: '14px', fontWeight: 700, margin: '0 0 10px' }}>Yang Bundda Mira suka:</p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
                        {[
                            'Aktivitasnya memang anak suka: mewarnai, cari kata, cocokkan gambar',
                            'Bundda nggak perlu jago Inggris—tinggal ikuti panduannya',
                            'Cuma 15 menit sehari, tapi jadi quality time yang kerasa',
                            'Belajarnya bertahap dan urut, jadi anak nggak kaget',
                        ].map((item, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                                <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: 'linear-gradient(135deg, #ff8c00, #e65c00)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                                    <svg width="9" height="9" viewBox="0 0 24 24" fill="white"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /></svg>
                                </div>
                                <span style={{ color: '#374151', fontSize: '13px', lineHeight: 1.5 }}>{item}</span>
                            </div>
                        ))}
                    </div>

                    <p style={{ color: '#e65c00', fontSize: '14px', fontWeight: 700, margin: '0 0 10px' }}>Kesimpulan Bundda Mira:</p>
                    <p style={{ color: '#64748b', fontSize: '14px', fontStyle: 'italic', lineHeight: 1.7, borderLeft: '3px solid #ff8c00', paddingLeft: '14px', margin: 0 }}>
                        "Anak tuh bukan butuh les mahal. Yang dia butuh itu cara belajar yang seru—dan waktu sebentar tapi rutin bareng Bunddanya."
                    </p>
                </div>

                <a
                    href="#order"
                    onClick={(e) => scrollToOrder(e)}
                    style={{
                        display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                        background: 'linear-gradient(135deg, #ff8c00, #e65c00)',
                        color: 'white', fontWeight: 900, fontSize: '15px',
                        border: 'none', borderRadius: '100px', padding: '16px 32px',
                        cursor: 'pointer', boxShadow: '0 8px 32px rgba(255,100,0,0.5)',
                        textDecoration: 'none',
                    }}
                >
                    Saya Mau Mulai 3 Hari Jago Inggris
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" /></svg>
                </a>

            </div>
        </section>
    );
}

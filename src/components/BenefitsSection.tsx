const benefits = [
    {
        emoji: '🧒',
        title: 'Sistem 3 Hari yang Bertahap',
        description: 'kenal → tambah kosakata → mulai baca/tulis. Anak nggak kaget, Bunda tinggal ikuti.',
        highlight: true,
    },
    {
        emoji: '👩‍👧',
        title: 'Bunda Nggak Perlu Jago Inggris',
        description: 'Worksheet sudah ada panduan simpel. Bunda tinggal buka, ikuti, lalu dampingi.',
        highlight: false,
    },
    {
        emoji: '🎮',
        title: 'Aktivitasnya Bikin Anak Betah',
        description: 'Mewarnai, matching, word search, tebak kosakata, sampai tracing—biar anak belajar tanpa drama.',
        highlight: false,
    },
    {
        emoji: '💰',
        title: 'Lebih Hemat dari Les Bulanan',
        description: 'Les bisa Rp500rb–Rp2jt/bulan. Ini sekali bayar Rp99.000, file bisa dipakai selamanya dan bisa print ulang.',
        highlight: false,
    },
    {
        emoji: '📅',
        title: 'Cukup 15 Menit Sehari',
        description: 'Waktu pendek tapi konsisten. Pas untuk quality time bareng si Kecil.',
        highlight: false,
    },
    {
        emoji: '🎁',
        title: 'Bonusnya Lengkap',
        description: 'Dapat 300+ Kartu Afirmasi Positif + 100 Days Math Workbook.',
        highlight: false,
        hasButton: true,
    },
];

export default function BenefitsSection() {
    return (
        <section style={{ background: '#ffffff', padding: '20px 24px' }}>

            <h2 style={{ textAlign: 'center', fontSize: 'clamp(20px, 4vw, 30px)', fontWeight: 900, color: '#1a0800', lineHeight: 1.2, margin: '0 0 12px' }}>
                Ajarkan Si Kecil Jago Inggris di Rumah,<br />
                <span style={{ color: '#e65c00' }}>Lebih Hemat Tanpa Les Mahal</span>
            </h2>

            <p style={{ textAlign: 'center', color: '#64748b', fontSize: '13px', maxWidth: '500px', margin: '0 auto 24px', lineHeight: 1.6 }}>
                Karena ini bukan sekadar buku latihan. Ini <strong>sistem lengkap untuk mendampingi anak belajar bahasa Inggris di rumah</strong> — efektif, menyenangkan, dan terjangkau.
            </p>

            {/* High-density Benefits Grid (No Cards) */}
            <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '12px 24px' }}>
                {benefits.map((b, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', padding: '8px 0' }}>
                        <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: '#fff3e8', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', flexShrink: 0, border: '1px solid #ffe0c0' }}>{b.emoji}</div>
                        <div style={{ flex: 1 }}>
                            <h3 style={{ color: '#1a0800', fontSize: '15px', fontWeight: 800, lineHeight: 1.3, margin: '0 0 2px' }}>{b.title}</h3>
                            <p style={{ color: '#64748b', fontSize: '13px', lineHeight: 1.5, margin: 0 }}>{b.description}</p>
                            {b.hasButton && (
                                <a
                                    href="#order"
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '8px',
                                        background: 'linear-gradient(135deg, #ff8c00, #e65c00)',
                                        color: 'white',
                                        fontWeight: 800,
                                        fontSize: '14px',
                                        padding: '12px 24px',
                                        borderRadius: '100px',
                                        textDecoration: 'none',
                                        marginTop: '12px',
                                        width: '100%',
                                        maxWidth: '250px',
                                        boxShadow: '0 4px 16px rgba(255,100,0,0.4)',
                                    }}
                                >
                                    Saya Mau Paket + Bonusnya
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Value stack */}
            <div style={{ maxWidth: '600px', margin: '24px auto 0', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '24px' }}>
                <img
                    src="/img2-optimized.webp"
                    alt="Semua yang akan Bunda dapatkan"
                    width="280"
                    height="209"
                    loading="lazy"
                    decoding="async"
                    style={{
                        width: '100%',
                        maxWidth: '280px',
                        height: 'auto',
                        borderRadius: '16px',
                        margin: '0 auto 20px',
                        display: 'block',
                    }}
                />

                <h3 style={{ textAlign: 'center', fontSize: '20px', fontWeight: 900, color: '#1a0800', margin: '0 0 20px' }}>
                    Semua ini yang akan Bunda dapatkan
                </h3>
                {[
                    { item: '✅ Worksheet "3 Hari Jago Inggris" (Sistem Bertahap 3 Hari)', subitems: ['Hari demi hari dibuat makin siap: lihat & sebut → kenal kata → mulai baca/tulis sederhana.'], value: 'Rp 199.000' },
                    { item: '🌟 EXTRA BONUS: 300+ Kartu Afirmasi Positif Anak', subitems: ['Bantu bangun percaya diri dan kebiasaan self-talk positif.'], value: 'Rp 75.000' },
                    { item: '🔥 MEGA BONUS: 100 Days Math Workbook', subitems: ['Biar nggak cuma Inggris—anak juga terbiasa berhitung lewat latihan seru.'], value: 'Rp 149.000' },
                ].map((v, i) => (
                    <div key={i} style={{ marginBottom: '16px', paddingBottom: '16px', borderBottom: i < 2 ? '1px solid #fff0e6' : 'none' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '4px' }}>
                            <span style={{ color: '#1a0800', fontSize: '14px', fontWeight: 700 }}>{v.item}</span>
                            <span style={{ color: '#e65c00', fontWeight: 700, fontSize: '14px', flexShrink: 0, marginLeft: '12px' }}>{v.value}</span>
                        </div>
                        {v.subitems && v.subitems.map((sub, si) => (
                            <p key={si} style={{ color: '#64748b', fontSize: '12px', margin: '2px 0 0 0', paddingLeft: '8px' }}>{sub}</p>
                        ))}
                    </div>
                ))}
                <div style={{ textAlign: 'center', marginTop: '8px' }}>
                    <p style={{ color: '#64748b', fontSize: '13px', margin: '0 0 6px' }}>Total Nilai: <span style={{ textDecoration: 'line-through' }}>Rp 423.000</span> <span style={{ background: '#4ade80', color: '#064e3b', fontSize: '11px', fontWeight: 700, padding: '2px 8px', borderRadius: '100px', marginLeft: '8px' }}>Hemat 77%</span></p>
                    <p style={{ color: '#e65c00', fontSize: '28px', fontWeight: 900, margin: '0 0 16px' }}>Rp 99.000</p>
                    <a
                        href="#order"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '8px',
                            background: 'linear-gradient(135deg, #ff8c00, #e65c00)',
                            color: 'white',
                            fontWeight: 800,
                            fontSize: '15px',
                            padding: '14px 28px',
                            borderRadius: '100px',
                            textDecoration: 'none',
                            width: '100%',
                            maxWidth: '280px',
                            boxShadow: '0 6px 24px rgba(255,100,0,0.5)',
                        }}
                    >
                        Ambil Harga Promo
                    </a>
                </div>
            </div>
        </section>
    );
}

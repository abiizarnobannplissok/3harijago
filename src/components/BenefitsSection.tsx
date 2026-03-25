const benefits = [
    {
        emoji: '🧒',
        title: 'Khusus Usia 2–10 Tahun',
        description: 'Materi dibagi per kelompok usia: Starter (2-3 th), Beginner (4-6 th), Explorer (7-10 th). Tidak terlalu mudah, tidak terlalu sulit.',
        highlight: true,
    },
    {
        emoji: '👩‍👧',
        title: 'Bunda Bisa Langsung Ajarkan',
        description: 'Tidak perlu background pendidikan bahasa. Setiap halaman dilengkapi panduan untuk orang tua — tinggal ikuti langkahnya.',
        highlight: false,
    },
    {
        emoji: '🎮',
        title: 'Belajar Sambil Bermain',
        description: 'Aktivitas fun: mewarnai + kosakata, tebak gambar, lagu sederhana, dan story time — anak belajar tanpa sadar sedang belajar.',
        highlight: false,
    },
    {
        emoji: '💰',
        title: 'Hemat Biaya Kursus Jutaan',
        description: 'Kursus bahasa Inggris anak bisa Rp 500.000–2.000.000/bulan. Worksheet ini seharga Rp 99.000 untuk seumur hidup.',
        highlight: false,
    },
    {
        emoji: '📅',
        title: 'Rutinitas 15 Menit Per Hari',
        description: 'Cukup 15 menit bersama setiap hari. Sistem terstruktur 3 hari pertama untuk fondasi, lalu lanjutkan sesuai kemampuan anak.',
        highlight: false,
    },
    {
        emoji: '🎁',
        title: 'Bonus Flashcard Digital + Lagu',
        description: 'Dapat bonus Flashcard 100 Kosakata Bergambar & kumpulan lagu anak berbahasa Inggris yang asyik. Total senilai Rp 85.000, Termasuk!',
        highlight: false,
    },
];

export default function BenefitsSection() {
    return (
        <section style={{ background: '#ffffff', padding: '20px 24px' }}>

            <h2 style={{ textAlign: 'center', fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 900, color: '#1a0800', lineHeight: 1.2, margin: '0 0 14px' }}>
                Ajarkan Si Kecil Jago Inggris di Rumah,<br />
                <span style={{ color: '#e65c00' }}>Lebih Hemat Tanpa Les Mahal</span>
            </h2>

            <p style={{ textAlign: 'center', color: '#64748b', fontSize: '15px', maxWidth: '500px', margin: '0 auto 32px', lineHeight: 1.75 }}>
                Karena ini bukan sekadar buku latihan. Ini <strong>sistem lengkap untuk mendampingi anak belajar bahasa Inggris di rumah</strong> — efektif, menyenangkan, dan terjangkau.
            </p>

            {/* High-density Benefits Grid (No Cards) */}
            <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '12px 24px' }}>
                {benefits.map((b, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', padding: '8px 0' }}>
                        <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: '#fff3e8', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', flexShrink: 0, border: '1px solid #ffe0c0' }}>{b.emoji}</div>
                        <div>
                            <h3 style={{ color: '#1a0800', fontSize: '15px', fontWeight: 800, lineHeight: 1.3, margin: '0 0 2px' }}>{b.title}</h3>
                            <p style={{ color: '#64748b', fontSize: '13px', lineHeight: 1.5, margin: 0 }}>{b.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Value stack */}
            <div style={{ maxWidth: '600px', margin: '24px auto 0', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '24px' }}>
                <h3 style={{ textAlign: 'center', fontSize: '20px', fontWeight: 900, color: '#1a0800', margin: '0 0 20px' }}>
                    📦 Ini yang Bunda Dapat Seharga Rp 99.000:
                </h3>
                {[
                    { item: 'Worksheet Ebook "3 Hari Jago Inggris" (90+ halaman)', value: 'Rp 199.000' },
                    { item: 'Flashcard 100 Kosakata Bergambar (Digital)', value: 'Rp 55.000' },
                    { item: 'Kumpulan Lagu Anak Bahasa Inggris (Audio)', value: 'Rp 35.000' },
                    { item: 'Panduan Orang Tua Step-by-Step', value: 'Rp 29.000' },
                ].map((v, i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px', paddingBottom: '12px', borderBottom: i < 3 ? '1px solid #fff0e6' : 'none' }}>
                        <span style={{ color: '#374151', fontSize: '14px' }}>✅ {v.item}</span>
                        <span style={{ color: '#e65c00', fontWeight: 700, fontSize: '14px', flexShrink: 0, marginLeft: '12px' }}>{v.value}</span>
                    </div>
                ))}
                <div style={{ textAlign: 'center', marginTop: '8px' }}>
                    <p style={{ color: '#64748b', fontSize: '13px', margin: '0 0 6px' }}>Total Nilai: <span style={{ textDecoration: 'line-through' }}>Rp 318.000</span></p>
                    <p style={{ color: '#e65c00', fontSize: '24px', fontWeight: 900, margin: 0 }}>Harga Spesial: Rp 99.000</p>
                </div>
            </div>
        </section>
    );
}

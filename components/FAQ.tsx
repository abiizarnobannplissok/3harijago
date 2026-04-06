'use client';

import { useState, useCallback } from 'react';

const faqs = [
    {
        question: '1) Ini produk apa? Kelas atau worksheet?',
        answer: 'Ini paket worksheet (file digital) untuk belajar bahasa Inggris di rumah. Bukan kelas dan bukan les. Bundda tinggal download, lalu pakai sesuai panduan.',
    },
    {
        question: '2) Cocok untuk usia berapa?',
        answer: 'Cocok untuk anak usia 2–10 tahun. Materinya bertahap dan aktivitasnya bervariasi, jadi bisa disesuaikan dengan kemampuan anak.',
    },
    {
        question: '3) Harus bisa bahasa Inggris dulu nggak, Bun?',
        answer: 'Nggak perlu. Worksheet ini dibuat mudah diikuti. Bundda cukup dampingi anak sesuai petunjuk yang tersedia.',
    },
    {
        question: '4) Belajarnya butuh waktu berapa lama tiap hari?',
        answer: 'Cukup sekitar 15 menit sehari. Kalau anak lagi semangat, boleh lanjut. Kalau lagi capek, berhenti dulu—yang penting konsisten.',
    },
    {
        question: '5) Ini harus diprint atau bisa di HP?',
        answer: 'Bisa dua-duanya. Bisa diprint untuk anak yang lebih nyaman menulis langsung. Bisa juga dibuka di HP/Tablet/Laptop untuk lihat materi dan aktivitasnya.',
    },
    {
        question: '6) Setelah bayar, dapatnya apa dan cara aksesnya bagaimana?',
        answer: 'Setelah pembayaran berhasil, Bundda akan dapat akses file digital (link/unduhan) untuk: Worksheet "3 Hari Jago Inggris", Bonus 300+ Kartu Afirmasi Positif Anak, Bonus 100 Days Math Workbook.',
    },
    {
        question: '7) Boleh dipakai ulang?',
        answer: 'Boleh. Ini akses selamanya, jadi bisa dipakai berulang dan bisa di-print ulang kapan saja (termasuk untuk adik).',
    },
    {
        question: '8) Anak saya gampang bosan, ini tetap cocok?',
        answer: 'Justru dibuat untuk anak yang cepat bosan, karena aktivitasnya beragam: mewarnai, permainan kosakata, cari kata, cocokkan gambar, tracing, dll.',
    },
    {
        question: '9) Kalau saya kesulitan download/file-nya gimana?',
        answer: 'Tenang, kami siap bantu untuk kendala teknis seperti link, download, atau file tidak bisa dibuka. Tinggal hubungi admin.',
    },
    {
        question: '10) Ini bisa bikin anak langsung jago dalam 3 hari?',
        answer: 'Worksheet ini adalah program mini 3 hari untuk membangun fondasi dengan cara yang fun dan terarah. Resulta bisa berbeda, tapi tujuannya: anak lebih nyaman, lebih berani, dan mulai terbiasa dengan bahasa Inggris di rumah.',
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = useCallback((index: number) => {
        setOpenIndex(prev => prev === index ? null : index);
    }, []);

    return (
        <section style={{ background: '#ffffff', padding: '40px 24px' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                    <div style={{ display: 'inline-flex', background: '#fff3e8', border: '1px solid #ffd0a0', borderRadius: '100px', padding: '6px 18px' }}>
                        <span style={{ color: '#e65c00', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>❓ Pertanyaan yang Sering Ditanya</span>
                    </div>
                </div>

                <h2 style={{ textAlign: 'center', fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 900, color: '#1a0800', lineHeight: 1.2, margin: '0 0 32px' }}>
                    Ada yang ingin ditanyakan?<br />
                    <span style={{ color: '#e65c00' }}>Simak jawaban berikut ini!</span>
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {faqs.map((faq, i) => (
                        <div
                            key={i}
                            style={{
                                background: 'white',
                                borderRadius: '12px',
                                border: openIndex === i ? '2px solid #e65c00' : '1px solid #e2e8f0',
                                overflow: 'hidden',
                                boxShadow: openIndex === i ? '0 4px 16px rgba(230,92,0,0.15)' : '0 2px 8px rgba(0,0,0,0.05)',
                            }}
                        >
                            <button
                                onClick={() => toggle(i)}
                                style={{
                                    width: '100%',
                                    padding: '16px 20px',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    background: 'transparent',
                                    border: 'none',
                                    cursor: 'pointer',
                                    textAlign: 'left',
                                }}
                            >
                                <span style={{ color: '#1a0800', fontSize: '14px', fontWeight: 600, lineHeight: 1.4 }}>
                                    {faq.question}
                                </span>
                                <span style={{
                                    width: '28px',
                                    height: '28px',
                                    borderRadius: '50%',
                                    background: openIndex === i ? '#e65c00' : '#fff3e8',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0,
                                    marginLeft: '12px',
                                    transition: 'transform 0.2s ease',
                                    transform: openIndex === i ? 'rotate(180deg)' : 'rotate(0deg)',
                                }}>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill={openIndex === i ? 'white' : '#e65c00'}>
                                        <path d="M7 10l5 5 5-5z" />
                                    </svg>
                                </span>
                            </button>
                            {openIndex === i && (
                                <div style={{ padding: '0 20px 16px 20px' }}>
                                    <p style={{ color: '#64748b', fontSize: '14px', lineHeight: 1.7, margin: 0, paddingTop: '8px', borderTop: '1px solid #f1f5f9' }}>
                                        {faq.answer}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default function Hero() {
  return (
    <section
      style={{
        background: 'linear-gradient(160deg, #1a0800 0%, #7c2600 35%, #c84200 60%, #1a0800 100%)',
        position: 'relative', overflow: 'hidden',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        padding: '60px 24px 40px',
        minHeight: '100dvh',
      }}
    >
      {/* Background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span style={{ fontSize: 'clamp(80px, 18vw, 220px)', color: 'transparent', WebkitTextStroke: '1.5px rgba(255,255,255,0.05)', letterSpacing: '0.1em', lineHeight: 1, fontWeight: 900, textTransform: 'uppercase' }}>KIDS</span>
      </div>

      {/* Vertical streaks */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(18)].map((_, i) => (
          <div key={i} className="absolute top-0 bottom-0" style={{ left: `${i * 5.8}%`, width: i % 3 === 0 ? '2px' : '1px', background: `linear-gradient(180deg, transparent 0%, rgba(255,140,30,${i % 2 === 0 ? '0.12' : '0.07'}) 30%, rgba(255,140,30,${i % 2 === 0 ? '0.2' : '0.1'}) 65%, transparent 100%)`, filter: 'blur(1px)' }} />
        ))}
      </div>

      {/* Glow */}
      <div className="absolute pointer-events-none" style={{ width: '700px', height: '500px', top: 0, left: '50%', transform: 'translateX(-50%)', background: 'radial-gradient(ellipse, rgba(200,80,0,0.4) 0%, transparent 65%)', filter: 'blur(40px)' }} />

      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', width: '100%', maxWidth: '820px' }}>

        {/* Headline */}
        <h1 style={{ fontSize: 'clamp(26px, 5vw, 58px)', fontWeight: 900, color: 'white', textAlign: 'center', lineHeight: 1.15, margin: 0, maxWidth: '760px' }}>
          Ajarkan Si Kecil Bahasa Inggris<br />
          <span style={{ background: 'linear-gradient(90deg, #ff8c00, #ffb347)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Tanpa Kursus Mahal, Dari Rumah!
          </span>
        </h1>

        {/* Sub-headline */}
        <p style={{ color: 'rgba(255,220,180,0.9)', fontSize: 'clamp(13px, 1.8vw, 16px)', textAlign: 'center', maxWidth: '520px', lineHeight: 1.65, margin: 0 }}>
          Worksheet Ebook <strong>"3 Hari Jago Inggris"</strong> khusus anak usia <span style={{ color: '#ffb347', fontWeight: 700 }}>2–10 tahun</span> — Bunda bisa mengajarkan langsung di rumah, fun, mudah, dan hasilnya nyata.
        </p>

        {/* Ebook cover */}
        <div
          style={{
            width: 'clamp(140px, 45vw, 180px)',
            aspectRatio: '9/16',
            borderRadius: '16px',
            background: 'linear-gradient(160deg, #ff6a00 0%, #ee0979 100%)',
            boxShadow: '0 24px 70px rgba(0,0,0,0.6), 0 0 0 4px rgba(255,140,0,0.3)',
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            padding: '20px', position: 'relative', overflow: 'hidden',
          }}
        >
          {[...Array(7)].map((_, i) => <div key={i} style={{ position: 'absolute', left: 0, right: 0, top: `${i * 40}px`, height: '1px', background: 'rgba(255,255,255,0.07)' }} />)}
          <div style={{ fontSize: '40px', marginBottom: '8px' }}>📚</div>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '9px', letterSpacing: '3px', textTransform: 'uppercase', margin: '0 0 5px' }}>Worksheet Ebook</p>
          <h2 style={{ color: 'white', fontSize: '18px', fontWeight: 900, textAlign: 'center', lineHeight: 1.25, margin: '0 0 5px', textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>3 Hari Jago Inggris</h2>
          <p style={{ color: 'rgba(255,220,180,0.7)', fontSize: '10px', margin: '0 0 12px', textAlign: 'center' }}>Untuk Anak Usia 2–10 Tahun</p>
          <div style={{ background: 'rgba(255,255,255,0.2)', borderRadius: '100px', padding: '4px 12px', fontSize: '9px', color: 'white', fontWeight: 700 }}>✅ Bunda Bisa Mengajarkan!</div>
        </div>

        {/* CTA Button */}
        <button
          style={{
            display: 'flex', alignItems: 'center', gap: '12px',
            background: 'linear-gradient(135deg, #ff8c00, #e65c00)',
            color: 'white', fontWeight: 900, fontSize: 'clamp(14px, 2vw, 17px)',
            border: 'none', borderRadius: '100px', padding: '15px 30px',
            cursor: 'pointer', boxShadow: '0 8px 36px rgba(255,100,0,0.65)',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease', margin: 0,
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-3px) scale(1.02)'; (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 16px 48px rgba(255,100,0,0.8)'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0) scale(1)'; (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 8px 36px rgba(255,100,0,0.65)'; }}
        >
          🔥 Ya, Mau Anak Jago Inggris! — Rp 99.000
          <span style={{ width: '30px', height: '30px', borderRadius: '50%', background: 'rgba(255,255,255,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" /></svg>
          </span>
        </button>

      </div>

      {/* Bottom fade */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '70px', background: 'linear-gradient(0deg, #fff8f2 0%, transparent 100%)', pointerEvents: 'none' }} />
    </section>
  );
}

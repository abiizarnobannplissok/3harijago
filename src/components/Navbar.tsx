export default function Navbar() {
  return (
    <nav style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '20px 40px',
    }}>
      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <div style={{
          width: '32px',
          height: '32px',
          borderRadius: '10px',
          background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 12px rgba(59,130,246,0.4)',
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
            <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
          </svg>
        </div>
        <span style={{ color: 'white', fontWeight: 700, fontSize: '18px', letterSpacing: '-0.3px' }}>
          AirLume.Ai
        </span>
      </div>

      {/* Nav Links */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
        {['Home', 'Features', 'Loyalty Points', 'How It Works', 'FAQ'].map((item, i) => (
          <a key={item} href="#" style={{
            color: i === 0 ? 'white' : 'rgba(200,215,255,0.75)',
            fontSize: '14px',
            fontWeight: i === 0 ? 600 : 500,
            textDecoration: 'none',
            transition: 'color 0.2s',
          }}
            onMouseEnter={e => (e.currentTarget.style.color = 'white')}
            onMouseLeave={e => (e.currentTarget.style.color = i === 0 ? 'white' : 'rgba(200,215,255,0.75)')}
          >
            {item}
          </a>
        ))}
      </div>

      {/* Auth Buttons */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <a href="#" style={{
          color: 'rgba(200,215,255,0.85)',
          fontSize: '14px',
          fontWeight: 500,
          textDecoration: 'none',
        }}>
          Log In
        </a>
        <button style={{
          background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
          color: 'white',
          fontSize: '14px',
          fontWeight: 600,
          border: 'none',
          borderRadius: '100px',
          padding: '10px 22px',
          cursor: 'pointer',
          boxShadow: '0 4px 16px rgba(37,99,235,0.4)',
        }}>
          Contact Us
        </button>
      </div>
    </nav>
  );
}

import { useState, useEffect } from 'react';

const notifications = [
    { name: 'Bunda Siska', location: 'Jakarta', time: '5 menit yang lalu' },
    { name: 'Bunda Ayu', location: 'Surabaya', time: '12 menit yang lalu' },
    { name: 'Bunda Dewi', location: 'Bandung', time: '15 menit yang lalu' },
    { name: 'Bunda Rina', location: 'Medan', time: '23 menit yang lalu' },
    { name: 'Bunda Lisa', location: 'Bali', time: '30 menit yang lalu' },
    { name: 'Bunda Maya', location: 'Jakarta', time: '35 menit yang lalu' },
    { name: 'Bunda Devi', location: 'Semarang', time: '42 menit yang lalu' },
    { name: 'Bunda Sari', location: 'Makassar', time: '50 menit yang lalu' },
];

export default function NotificationPopup() {
    const [show, setShow] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slideUp, setSlideUp] = useState(false);

    useEffect(() => {
        // Show notification after 7 seconds
        const showTimer = setTimeout(() => {
            setShow(true);
            setSlideUp(true);
        }, 7000);

        // Change notification every 4 seconds
        const interval = setInterval(() => {
            setSlideUp(false);
            setTimeout(() => {
                setCurrentIndex((prev) => (prev + 1) % notifications.length);
                setSlideUp(true);
            }, 300);
        }, 4000);

        return () => {
            clearTimeout(showTimer);
            clearInterval(interval);
        };
    }, []);

    if (!show) return null;

    const current = notifications[currentIndex];

    return (
        <div
            style={{
                position: 'fixed',
                top: '20px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 9999,
                animation: slideUp ? 'slideUp 0.5s ease-out' : 'slideDown 0.3s ease-in',
            }}
        >
            <style>
                {`
                    @keyframes slideUp {
                        from { opacity: 0; transform: translateX(-50%) translateY(-20px); }
                        to { opacity: 1; transform: translateX(-50%) translateY(0); }
                    }
                    @keyframes slideDown {
                        from { opacity: 1; transform: translateX(-50%) translateY(0); }
                        to { opacity: 0; transform: translateX(-50%) translateY(-20px); }
                    }
                `}
            </style>
            <div
                style={{
                    background: 'white',
                    borderRadius: '12px',
                    padding: '12px 16px',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.15), 0 0 0 2px #e65c00',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    maxWidth: '320px',
                }}
            >
                <div
                    style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #ff8c00, #e65c00)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '16px',
                        flexShrink: 0,
                    }}
                >
                    ✓
                </div>
                <div style={{ flex: 1 }}>
                    <p style={{ margin: 0, fontSize: '12px', color: '#64748b', lineHeight: 1.4 }}>
                        <strong style={{ color: '#1a0800' }}>{current.name}</strong> dari {current.location} baru saja membeli worksheet
                    </p>
                    <p style={{ margin: '2px 0 0', fontSize: '10px', color: '#e65c00', fontWeight: 600 }}>
                        {current.time}
                    </p>
                </div>
            </div>
        </div>
    );
}
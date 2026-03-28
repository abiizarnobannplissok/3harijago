import { createElement, useEffect, useRef, useState } from 'react';

export default function OrderForm() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [shouldLoadScript, setShouldLoadScript] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShouldLoadScript(true);
                    observer.disconnect();
                }
            },
            { rootMargin: '400px' }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!shouldLoadScript) return;

        const existingScript = document.querySelector('script[src="https://zobook.form.id/app.js"]');
        if (existingScript) return;

        const script = document.createElement('script');
        script.src = 'https://zobook.form.id/app.js';
        script.async = true;
        document.body.appendChild(script);
    }, [shouldLoadScript]);

    return (
        <section id="order" ref={containerRef} style={{ background: '#0a0a0a', padding: '60px 20px', textAlign: 'center' }}>
            <h2 style={{ color: 'white', fontSize: '28px', fontWeight: 800, marginBottom: '30px' }}>
                Pesan Sekarang
            </h2>
            
            <div style={{ maxWidth: '500px', margin: '0 auto' }}>
                {shouldLoadScript ? (
                    createElement('mengantar-form-widget', {
                        id: 'mengantar-form-widget',
                        url: '3-hari-jago-inggris',
                        domain: 'zobook.form.id',
                        embed: 'true',
                        settings: JSON.stringify({
                            type: "page",
                            popupButtonText: "Klik untuk pemesanan",
                            popupText: "Form Pemesanan",
                            popupButtonColor: "#2e47ba",
                            redirectTo: "https://zobook.form.id",
                            isFbPixel: true,
                            isHideBackground: true,
                            isNoMargin: false,
                            isGtm: true
                        })
                    })
                ) : (
                    <div style={{ color: '#666', padding: '40px', minHeight: '200px' }}>
                        Form pemesanan akan dimuat...
                    </div>
                )}
            </div>
        </section>
    );
}

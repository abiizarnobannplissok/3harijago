export default function OrderForm() {
    return (
        <section id="order" style={{ background: '#0a0a0a', padding: '60px 20px', textAlign: 'center' }}>
            <h2 style={{ color: 'white', fontSize: '28px', fontWeight: 800, marginBottom: '30px' }}>
                Pesan Sekarang
            </h2>
            
            <div style={{ maxWidth: '500px', margin: '0 auto' }}>
                <mengantar-form-widget 
                    id="mengantar-form-widget" 
                    url="3-hari-jago-inggris" 
                    domain="zobook.form.id" 
                    embed="true"
                    settings={JSON.stringify({
                        type: "page",
                        popupButtonText: "Klik untuk pemesanan",
                        popupText: "Form Pemesanan",
                        popupButtonColor: "#2e47ba",
                        redirectTo: "https://zobook.form.id",
                        isFbPixel: true,
                        isHideBackground: true,
                        isNoMargin: false,
                        isGtm: true
                    })}
                ></mengantar-form-widget>
            </div>
        </section>
    );
}

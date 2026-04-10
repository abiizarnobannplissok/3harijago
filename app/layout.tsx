import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '3 Hari Jago Inggris - Worksheet untuk Anak',
  description: 'Program mini 3 hari yang bikin anak naik level pelan-pelan: mulai dari kenal lewat gambar, lanjut main kosakata, lalu latihan baca & tulis kata pertamanya.',
  keywords: ['belajar bahasa inggris anak', 'worksheet bahasa inggris', 'kursus bahasa inggris anak', 'belajar inggris dari rumah'],
  openGraph: {
    title: '3 Hari Jago Inggris - Worksheet untuk Anak',
    description: 'Program mini 3 hari yang bikin anak naik level pelan-pelan: mulai dari kenal lewat gambar, lanjut main kosakata, lalu latihan baca & tulis kata pertamanya.',
    type: 'website',
    locale: 'id_ID',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://jadilebihbaik.form.id" />
        
        {/* Preload hero image for faster LCP */}
        <link rel="preload" as="image" href="/imghero-optimized.webp" fetchPriority="high" />
        
        <link 
          rel="preload" 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap" 
          as="style" 
        />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap" rel="stylesheet" />
        
        <style dangerouslySetInnerHTML={{
          __html: `
            #app{background-color:transparent !important;text-align:left} 
            .embed-sealHide, .embed-leftHide, .bottom-bar-text{display:none !important;} 
            .embed-rightHide{flex: 0 0 100% !important; width: 100% !important; max-width:100% !important; margin:auto;} 
            .embed-bgHide{box-shadow:none !important; background:transparent; border:none !important; padding: 1px 20px !important; margin:0;} 
            .embed-topSpace{margin:auto !important;} 
            .embed-wrapper{height: auto !important; overflow:initial !important;} 
            .embed-notopMargin{margin:0 !important; .embed-gap{gap: 10px !important;}}
          `,
        }} />
      </head>
      <body style={{ fontFamily: "'Inter', sans-serif" }}>
        {children}
      </body>
    </html>
  );
}

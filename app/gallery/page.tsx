import HeaderPage from '@/app/components/header/page'
import FooterPage from '@/app/components/footer/page'
import Duck from '@/app/components/duck/page'

const images = [
  { src: '/pic1.png', label: '' },
  { src: '/pic2.png', label: '' },
  { src: '/pic3.png', label: '' },
  { src: '/pic4.png', label: '' },
]

export default function GalleryPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#0d1b2a' }}>
      <HeaderPage />
      <main style={{ flex: 1, padding: '60px 40px', maxWidth: '900px', margin: '0 auto', width: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
          <Duck size={48} />
          <h1 style={{ color: '#f5c842', fontSize: '2rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Gallery</h1>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px' }}>
          {images.map((img) => (
            <div key={img.label} style={{ background: '#0a1628', border: '1.5px solid #1e3a5c', borderTop: '3px solid #f5c842', borderRadius: '10px', overflow: 'hidden', textAlign: 'center', padding: '20px 16px' }}>
              <img src={img.src} alt={img.label} style={{ width: '100%', height: '160px', objectFit: 'contain', opacity: 0.8 }} />
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', marginTop: '10px' }}>
                <Duck size={16} />
                <p style={{ color: '#7ab3d4', fontSize: '0.8rem' }}>{img.label}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <FooterPage />
    </div>
  )
}
import HeaderPage from '@/app/components/header/page'
import FooterPage from '@/app/components/footer/page'
import Duck from '@/app/components/duck/page'

export default function HomePage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#0d1b2a' }}>
      <HeaderPage />
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '60px 40px', position: 'relative' }}>
        <div style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
          <Duck size={48} /><Duck size={36} /><Duck size={48} />
        </div>
        <h1 style={{ fontSize: '2.8rem', fontWeight: 900, color: '#f5c842', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          Hi, I'm Clarence Kyle Borbe
        </h1>
        <p style={{ color: '#7ab3d4', fontSize: '0.9rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginTop: '12px' }}>
          Developer · Student · Duck Lover
        </p>
        <a href="/about" style={{ marginTop: '32px', display: 'inline-block', background: '#f5c842', color: '#0a1628', fontWeight: 700, fontSize: '0.85rem', padding: '12px 32px', borderRadius: '4px', textDecoration: 'none', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          Learn More About Me
        </a>
      </main>
      <FooterPage />
    </div>
  )
}
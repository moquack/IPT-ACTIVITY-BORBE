import HeaderPage from '@/app/components/header/page'
import FooterPage from '@/app/components/footer/page'
import Duck from '@/app/components/duck/page'

export default function AboutPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#0d1b2a' }}>
      <HeaderPage />
      <main style={{ flex: 1, padding: '60px 40px', maxWidth: '800px', margin: '0 auto', width: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
          <Duck size={48} />
          <h1 style={{ color: '#f5c842', fontSize: '2rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em' }}>About Me</h1>
        </div>
        <div style={{ background: '#0a1628', border: '1.5px solid #1e3a5c', borderRadius: '10px', padding: '32px', borderLeft: '4px solid #f5c842' }}>
          <p style={{ color: '#7ab3d4', lineHeight: '1.9', fontSize: '1rem' }}>
            Hi! I'm Clarence Kyle Borbe, a student taking up Integrative Programming and Technology.
            I love building web applications, learning new technologies, and of course — ducks.
          </p>
          <p style={{ color: '#7ab3d4', lineHeight: '1.9', fontSize: '1rem', marginTop: '16px' }}>
            Based in San Pablo City, Laguna, Philippines. Currently focused on mastering game development using Unity and Roblox Studio.
          </p>
        </div>
      </main>
      <FooterPage />
    </div>
  )
}
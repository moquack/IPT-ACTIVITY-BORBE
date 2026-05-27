import HeaderPage from '@/app/components/header/page'
import FooterPage from '@/app/components/footer/page'
import Duck from '@/app/components/duck/page'

export default function ResumePage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#0d1b2a' }}>
      <HeaderPage />
      <main style={{ flex: 1, padding: '60px 40px', maxWidth: '700px', margin: '0 auto', width: '100%', textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
          <Duck size={48} />
          <h1 style={{ color: '#f5c842', fontSize: '2rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Resume</h1>
          <Duck size={48} />
        </div>
        <p style={{ color: '#7ab3d4', fontSize: '1rem', lineHeight: '1.8' }}>
          Download my resume to learn more about my experience and qualifications.
        </p>
        <a href="BorbeResume.pdf" download style={{ marginTop: '32px', display: 'inline-block', background: '#f5c842', color: '#0a1628', fontWeight: 700, fontSize: '0.9rem', padding: '14px 36px', borderRadius: '4px', textDecoration: 'none', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          Download Resume
        </a>
      </main>
      <FooterPage />
    </div>
  )
}
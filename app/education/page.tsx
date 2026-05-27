import HeaderPage from '@/app/components/header/page'
import FooterPage from '@/app/components/footer/page'
import Duck from '@/app/components/duck/page'

export default function EducationPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#0d1b2a' }}>
      <HeaderPage />
      <main style={{ flex: 1, padding: '60px 40px', maxWidth: '800px', margin: '0 auto', width: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
          <Duck size={48} />
          <h1 style={{ color: '#f5c842', fontSize: '2rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Education</h1>
        </div>
        <div style={{ background: '#0a1628', border: '1.5px solid #1e3a5c', borderLeft: '4px solid #f5c842', borderRadius: '0 10px 10px 0', padding: '28px 32px' }}>
          <h2 style={{ color: '#f5c842', fontSize: '1.1rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>BS Information Technology</h2>
          <p style={{ color: '#378ADD', marginTop: '8px', fontSize: '0.85rem', letterSpacing: '0.05em' }}>PLSP · 2024 – Present</p>
          <p style={{ color: '#7ab3d4', marginTop: '12px', lineHeight: '1.7' }}>Major in Web and Game Development</p>
        </div>
      </main>
      <FooterPage />
    </div>
  )
}
import HeaderPage from '@/app/components/header/page'
import FooterPage from '@/app/components/footer/page'
import Duck from '@/app/components/duck/page'

export default function ContactPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#0d1b2a' }}>
      <HeaderPage />
      <main style={{ flex: 1, padding: '60px 40px', maxWidth: '600px', margin: '0 auto', width: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
          <Duck size={48} />
          <h1 style={{ color: '#f5c842', fontSize: '2rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Contact</h1>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {[
            { label: 'Email',    value: 'kyleborbe09@email.com' },
            { label: 'Location', value: 'San Pablo City, Laguna, Philippines' },
            { label: 'GitHub',   value: 'github.com/moquack' },
          ].map(({ label, value }) => (
            <div key={label} style={{ background: '#0a1628', border: '1.5px solid #1e3a5c', borderLeft: '4px solid #378ADD', borderRadius: '0 8px 8px 0', padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: '#f5c842', fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{label}</span>
              <span style={{ color: '#7ab3d4', fontSize: '0.9rem' }}>{value}</span>
            </div>
          ))}
        </div>
      </main>
      <FooterPage />
    </div>
  )
}
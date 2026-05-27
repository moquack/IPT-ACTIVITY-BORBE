import HeaderPage from '@/app/components/header/page'
import FooterPage from '@/app/components/footer/page'
import Duck from '@/app/components/duck/page'

const hobbies = ['Coding', 'Gaming', 'Reading', 'Music', 'Watching', 'Appreciate ducks']

export default function HobbiesPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#0d1b2a' }}>
      <HeaderPage />
      <main style={{ flex: 1, padding: '60px 40px', maxWidth: '800px', margin: '0 auto', width: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
          <Duck size={48} />
          <h1 style={{ color: '#f5c842', fontSize: '2rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Hobbies</h1>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {hobbies.map((hobby, i) => (
            <div key={hobby} style={{ background: '#0a1628', border: '1.5px solid #1e3a5c', borderLeft: '4px solid #f5c842', borderRadius: '0 8px 8px 0', padding: '16px 24px', display: 'flex', alignItems: 'center', gap: '16px' }}>
              <Duck size={24} />
              <span style={{ color: '#7ab3d4', fontSize: '1rem' }}>{hobby}</span>
            </div>
          ))}
        </div>
      </main>
      <FooterPage />
    </div>
  )
}
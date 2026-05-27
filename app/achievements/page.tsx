import HeaderPage from '@/app/components/header/page'
import FooterPage from '@/app/components/footer/page'
import Duck from '@/app/components/duck/page'

const achievements = [
  { title: 'TOP 6 NA-45', desc: 'I was a Former top 6 Garena server of the gun NA-45 in the game Call of Duty: Mobile', year: '2023' },
  { title: 'Terraria 100% Completion', desc: 'Completed the game Terraria at its fullest- All achievements, All items, All classes (including subclasses), All difficulty beaten 100% (version 1.4.4)', year: '2024' },
]

export default function AchievementsPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#0d1b2a' }}>
      <HeaderPage />
      <main style={{ flex: 1, padding: '60px 40px', maxWidth: '800px', margin: '0 auto', width: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
          <Duck size={48} />
          <h1 style={{ color: '#f5c842', fontSize: '2rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Achievements</h1>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {achievements.map((a) => (
            <div key={a.title} style={{ background: '#0a1628', border: '1.5px solid #1e3a5c', borderTop: '3px solid #f5c842', borderRadius: '10px', padding: '24px', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <Duck size={32} />
              <div>
                <h2 style={{ color: '#f5c842', fontSize: '1rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  {a.title} <span style={{ color: '#378ADD', fontSize: '0.8rem' }}>({a.year})</span>
                </h2>
                <p style={{ color: '#7ab3d4', marginTop: '8px', lineHeight: '1.7', fontSize: '0.9rem' }}>{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <FooterPage />
    </div>
  )
}
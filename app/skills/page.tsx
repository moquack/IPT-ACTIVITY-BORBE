import HeaderPage from '@/app/components/header/page'
import FooterPage from '@/app/components/footer/page'
import Duck from '@/app/components/duck/page'

const skills = ['HTML', 'Python', 'C SHARP', 'C++']

export default function SkillsPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#0d1b2a' }}>
      <HeaderPage />
      <main style={{ flex: 1, padding: '60px 40px', maxWidth: '800px', margin: '0 auto', width: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
          <Duck size={48} />
          <h1 style={{ color: '#f5c842', fontSize: '2rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Skills</h1>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
          {skills.map((skill) => (
            <span key={skill} style={{ background: '#0a1628', border: '1.5px solid #f5c842', color: '#f5c842', padding: '10px 22px', borderRadius: '4px', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.08em' }}>
              {skill}
            </span>
          ))}
        </div>
      </main>
      <FooterPage />
    </div>
  )
}
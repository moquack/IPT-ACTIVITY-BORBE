import HeaderPage from '@/app/components/header/page'
import FooterPage from '@/app/components/footer/page'
import Duck from '@/app/components/duck/page'

const projects = [
  { title: 'Portfolio Website', desc: 'My personal portfolio built with Next.js and duck energy.' },
  { title: 'Console-based Number System Converter', desc: 'C Sharp console program that automatically converts a number into another with a different number system. (Binary, Octal, Decimal, Hexadecimal)' },
  { title: 'Roblox Game', desc: 'A Roblox game coded in the programming language Lua. (Coming Soon)' },
]

export default function ProjectsPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#0d1b2a' }}>
      <HeaderPage />
      <main style={{ flex: 1, padding: '60px 40px', maxWidth: '900px', margin: '0 auto', width: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
          <Duck size={48} />
          <h1 style={{ color: '#f5c842', fontSize: '2rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Projects</h1>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
          {projects.map((p) => (
            <div key={p.title} style={{ background: '#0a1628', border: '1.5px solid #1e3a5c', borderTop: '3px solid #f5c842', borderRadius: '10px', padding: '24px', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '12px', right: '12px', opacity: 0.15 }}><Duck size={28} /></div>
              <h2 style={{ color: '#f5c842', fontSize: '1rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{p.title}</h2>
              <p style={{ color: '#7ab3d4', marginTop: '10px', fontSize: '0.9rem', lineHeight: '1.7' }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </main>
      <FooterPage />
    </div>
  )
}
import Duck from '@/app/components/duck/page'

export default function FooterPage() {
  return (
    <footer style={{ background: '#0a1628', borderTop: '2px solid #1e3a5c', padding: '16px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <span style={{ color: '#3a6a8c', fontSize: '0.72rem', letterSpacing: '0.1em' }}>
        © 2026 Clarence Kyle Borbe · All rights reserved
      </span>
      <div style={{ display: 'flex', gap: '6px' }}>
        <Duck size={18} /><Duck size={18} /><Duck size={18} />
      </div>
    </footer>
  )
}
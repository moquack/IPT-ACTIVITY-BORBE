'use client'
import { useRouter } from 'next/navigation'
import Duck from '@/app/components/duck/page'

const modes = ['left-to-right','right-to-left','top-to-bottom','bottom-to-top','alternating-lr','alternating-rl','center-out','edges-in']
const DARK = '#0a1628'
const ALT  = '#0d1b2a'

type SliceInfo = { el: HTMLDivElement; vertical: boolean; reverseOrigin: string }

function buildSlices(overlay: HTMLDivElement, mode: string, count: number): SliceInfo[] {
  const slices: SliceInfo[] = []
  for (let i = 0; i < count; i++) {
    const s = document.createElement('div')
    let origin = 'left'
    let vertical = false
    if (mode === 'left-to-right')  origin = 'left'
    if (mode === 'right-to-left')  origin = 'right'
    if (mode === 'top-to-bottom')  { origin = 'top';    vertical = true }
    if (mode === 'bottom-to-top')  { origin = 'bottom'; vertical = true }
    if (mode === 'alternating-lr') origin = i % 2 === 0 ? 'left'  : 'right'
    if (mode === 'alternating-rl') origin = i % 2 === 0 ? 'right' : 'left'
    if (mode === 'center-out')     origin = i < count / 2 ? 'right' : 'left'
    if (mode === 'edges-in')       origin = i < count / 2 ? 'left'  : 'right'
    const bg = i % 2 === 0 ? DARK : ALT
    if (vertical) {
      const w = 100 / count
      s.style.cssText = `position:absolute;top:0;bottom:0;left:${i*w}%;width:${w}%;background:${bg};transform:scaleY(0);transform-origin:${origin};`
    } else {
      const h = 100 / count
      s.style.cssText = `position:absolute;left:0;right:0;top:${i*h}%;height:${h}%;background:${bg};transform:scaleX(0);transform-origin:${origin};`
    }
    overlay.appendChild(s)
    const rev: Record<string,string> = { left:'right', right:'left', top:'bottom', bottom:'top' }
    slices.push({ el: s, vertical, reverseOrigin: rev[origin] })
  }
  return slices
}

export default function HeaderPage() {
  const router = useRouter()

  function navigate(href: string) {
    const mode = modes[Math.floor(Math.random() * modes.length)]
    const sliceCount = 10
    const overlay = document.createElement('div')
    overlay.style.cssText = 'position:fixed;inset:0;z-index:9999;pointer-events:none;'
    document.body.appendChild(overlay)
    const slices = buildSlices(overlay, mode, sliceCount)
    const prop = slices[0].vertical ? 'scaleY' : 'scaleX'
    slices.forEach(({ el }, i) => {
      setTimeout(() => {
        el.style.transition = 'transform 0.16s cubic-bezier(0.77,0,0.18,1)'
        el.style.transform = `${prop}(1)`
      }, i * 16)
    })
    setTimeout(() => {
      router.push(href)
      slices.forEach(({ el, reverseOrigin }, i) => {
        setTimeout(() => {
          el.style.transformOrigin = reverseOrigin
          el.style.transition = 'transform 0.16s cubic-bezier(0.77,0,0.18,1)'
          el.style.transform = `${prop}(0)`
        }, i * 16)
      })
      setTimeout(() => { document.body.removeChild(overlay) }, sliceCount * 16 + 300)
    }, sliceCount * 16 + 120)
  }

  const links = [
    { href: '/',             label: 'Home' },
    { href: '/about',        label: 'About' },
    { href: '/skills',       label: 'Skills' },
    { href: '/projects',     label: 'Projects' },
    { href: '/hobbies',      label: 'Hobbies' },
    { href: '/education',    label: 'Education' },
    { href: '/achievements', label: 'Achievements' },
    { href: '/resume',       label: 'Resume' },
    { href: '/contact',      label: 'Contact' },
    { href: '/gallery',      label: 'Gallery' },
  ]

  return (
    <header style={{ background: '#0a1628', borderBottom: '2px solid #f5c842', padding: '14px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <Duck size={28} />
        <span style={{ color: '#f5c842', fontWeight: 700, fontSize: '1.1rem', letterSpacing: '0.05em' }}>Clarence Kyle Borbe</span>
      </div>
      <nav style={{ display: 'flex', gap: '18px', flexWrap: 'wrap' }}>
        {links.map(({ href, label }) => (
          <button key={href} onClick={() => navigate(href)}
            style={{ background: 'none', border: 'none', color: '#7ab3d4', cursor: 'pointer', fontSize: '0.78rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            {label}
          </button>
        ))}
      </nav>
    </header>
  )
}
'use client'

export default function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 9999, border: 'none' }} />
      {children}
    </>
  )
}
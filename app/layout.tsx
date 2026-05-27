import { Press_Start_2P } from 'next/font/google'
import PageTransition from '@/app/components/transition/page'
import './globals.css'

const pressStart = Press_Start_2P({
  subsets: ['latin'],
  weight: ['400'],
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={pressStart.className}>
      <body style={{ margin: 0, padding: 0, overflowX: 'hidden' }}>
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  )
}
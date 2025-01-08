import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'App Name',
  description: 'Transform Your Mobile Experience',
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        {children}
        <ToastContainer 
          position="bottom-right" 
          autoClose={3000} 
          hideProgressBar 
          closeOnClick 
          pauseOnHover 
          draggable 
          theme="dark"
        />
      </body>
    </html>
  )
}


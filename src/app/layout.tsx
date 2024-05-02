import type { Metadata } from 'next'
import '../styles/globals.css'
import ReactQueryProvider from '@/providers/ReactQueryProvider'
import Aos from '@/components/animation/Aos'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import localFont from 'next/font/local'

const myFont = localFont({
  src: [
    {
      path: '../../public/assets/fonts/Vazir.woff'
    },
    {
      path: '../../public/assets/fonts/Vazir.ttf'
    }
  ]
})

export const metadata: Metadata = {
  title: 'Movie World',
  description: '',
  icons: {
    icon: '/assets/imgs/logo.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body className={`bg-stone-900 overflow-x-hidden ${myFont.className}`}>
        <ReactQueryProvider>
          <Aos />
          {children}
          <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
        </ReactQueryProvider>
      </body>
    </html >
  )
}
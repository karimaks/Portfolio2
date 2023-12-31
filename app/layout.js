import Header from '@/components/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import StoreProvider from '@/components/StoreProvider'

const inter = Inter({ subsets: ['latin'] })

//Utiliser bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <Header />
          <main>
          {children}
          </main>
          <Footer />
        </StoreProvider>

      </body>
    </html>
  )
}

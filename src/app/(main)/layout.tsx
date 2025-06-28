import { Footer } from '@/components/layouts/footer'
import { Header } from '@/components/layouts/header'

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

import { AccountLayout } from '@/app/(user)/account/components/account-layout'

import { Footer } from '@/components/layouts/footer'
import { Header } from '@/components/layouts/header'

export default function AccountMainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <div className="container mx-auto min-h-screen py-12">
        <AccountLayout>{children}</AccountLayout>
      </div>
      <Footer />
    </>
  )
}

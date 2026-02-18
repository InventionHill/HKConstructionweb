import { ReactNode } from 'react'
import React from 'react'
import NavBar from '../Navbars/MainHeader'
import Footer from '../Footer/MainFooter'

interface MainLayoutProps {
  children: ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
export default MainLayout

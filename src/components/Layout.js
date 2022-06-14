import React, { createContext, useState } from 'react'
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import Nav from './Nav'
import './layout.css'
import '../css/nav.css'

const LayoutContext = createContext()
export { LayoutContext }

const Layout = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>hi all</title>
        <link rel="canonical" href="http://justimanche.com" />
      </Helmet>
      <LayoutContext.Provider value={{ showMenu, setShowMenu }}>
        <main>
          <Nav />
          <h1>justinmanche.com</h1>
          {children}
          <Link to='/'>Home</Link>
        </main>
      </LayoutContext.Provider>
      <footer>

      </footer>
    </>
  )
}

export default Layout

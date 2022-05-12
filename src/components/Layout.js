import React from 'react'
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import './layout.css'

const Layout = ({ children }) => (
  <>
    <header>
      <Helmet>
        <meta charSet="utf-8" />
        <title>hi all</title>
        <link rel="canonical" href="http://justimanche.com" />
      </Helmet>
    </header>
    <main>
      <h1>justinmanche.com</h1>
      {children}
      <Link to='/'>Home</Link>
    </main>
    <footer>

    </footer>
  </>
)

export default Layout

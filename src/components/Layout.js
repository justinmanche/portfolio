import React from 'react'
import { Link } from "gatsby"
import './layout.css'

const Layout = ({ children }) => (
  <>
    <header>
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

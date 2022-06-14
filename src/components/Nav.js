import React, { useContext } from 'react'
import { LayoutContext } from './Layout'

const Nav = () => {
  const { showMenu, setShowMenu } = useContext(LayoutContext)
  console.log('Show Menu:', showMenu)
  return (
    <header>
      <div className='header-content' style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div className='left-part' style={{ display: 'flex' }}>
          <div className='logo'>
            <a href='/'>
              <h1>JM</h1>
            </a>
          </div>
        </div>
        <div className='right-part'>
          <ul>
            <li className='theme-switch'>
              <h3>Switch Theme</h3>
            </li>
            <li>
              <button className='hamburger-button' aria-label='Open menu' onClick={() => setShowMenu(!showMenu)}>
                <div>
                  <h3>Hamburger Menu</h3>
                </div>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Nav

import React, { useEffect } from 'react'
import './footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer className='sticky-footer'>
        <section className='footer c_flex'>
          <p className="Copyrights">&copy; all rights reserved</p>
          <Link className="footer_about" to="/about">About</Link>
        </section>
      </footer>
    </>
  )
}

export default Footer
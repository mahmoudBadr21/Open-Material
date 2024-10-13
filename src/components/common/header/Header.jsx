import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './header.css'

const Header = ({ toggleTheme, theme }) => {
  useEffect (() => {
    let header = document.getElementById("header")
    let links = document.getElementsByName("a")
    if (theme === 'light') {
      header.className = `sticky-header boxShadow ${theme}`
      
    }
    else {
      header.className = `sticky-header boxShadow ${theme}`
    }
  }, [theme])

  return (
    <>
      <header id="header">
        <section className="header c_flex">
          <div className="logo">
            <Link to="/">
              <span>O</span>pen <span>M</span>aterial
            </Link>
          </div>

          <div className="auther-links a_flex">
            <Link to="/addMaterial" className="add">
              Add Material
            </Link>
            <button onClick={() => toggleTheme()}>
              <i
                className={
                  theme === "light" ? "fa-regular fa-moon" : "fa-regular fa-sun"
                }
              ></i>
            </button>
          </div>
        </section>
      </header>
    </>
  );
}

export default Header
import React from "react"

import "../styles/index.css"

const Index = () => {
  return (
    <div>
      <header className="main-header">
        <nav>
          <h1 id="logo">Robdev</h1>
          <ul>
            <li>
              <a href="#about">
                <span>01.</span>About
              </a>
            </li>
            <li>
              <a href="#work">
                <span>02.</span>Work
              </a>
            </li>
            <li>
              <a href="#contact">
                <span>03.</span>Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="main-page">
        <h4>Hi, my name is</h4>
        <h1>Roberto Dacles.</h1>
        <h1>I create website with passion</h1>
        <p>
          I'm a self taught web developer based in Philippines,
          <br /> building high-quality websites and applications
        </p>
        <button>Get in Touch</button>
      </div>
    </div>
  )
}

export default Index

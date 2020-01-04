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
      <section className="main-page">
        <h4>Hi, my name is</h4>
        <h1>Roberto Dacles.</h1>
        <h1>A Fullstack Developer</h1>
        <p>
          I'm a self taught web developer based in Philippines,
          <br /> building high-quality websites and applications
        </p>
        <button>Get in Touch</button>
      </section>
      <section id="about">
        <p>
          <span>01.</span> Hi, my name is{" "}
          <em>
            <strong>Roberto Dacles</strong>
          </em>
          , From Philippines. I am a Internet
          <br />
          Cafe Owner for almost 6 years. I started coding around 2018, <br />
          and took it seriously last year. I dont have any college <br />
          degree but my passion and dedication on this career <br /> will help
          me to be come successful.
          <br />
        </p>
      </section>
    </div>
  )
}

export default Index

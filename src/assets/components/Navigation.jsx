import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <div>
      <nav>
          <div className="nav-left">
            <a href="#project"><h2>Portfolio</h2></a>
            <a href="#contact-us"><h2>Contact Us</h2></a>
          </div>
          <Link to="/">
            <div className="nav-center">
              <h1>Bridge</h1>
            </div>
          </Link>
          <div className="nav-right">
            <a href="https://www.linkedin.com/in/brijesh-joshi-a7b64126/" target='_blank'><i className="ri-linkedin-fill"></i></a>
            <a href="https://www.behance.net/brixcreative" target='_blank'><i className="ri-behance-fill"></i></a>
          </div>
        </nav>
    </div>
  )
}

export default Navigation
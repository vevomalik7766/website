import React from 'react';

import './Navbar.css'

function Navbar () {

  return (
    <section className="navbar">
      <a href="/" className="navbar-item">Home</a>
      <a href="#howitworks" className="navbar-item">How it Works</a>
      <a href="#features" className="navbar-item">Features</a>
      <a href="/myDocs" className="navbar-item">My Docs</a>
      <a href="/blogs" className="navbar-item">Blogs</a>
      <a href="/contact" className="navbar-item">Contact Us</a>
      <a href="/signup" className="navbar-item">
          <button className='navbar-item-btn'>
              Signup
          </button>
      </a>
      <a href="/signin" className="navbar-item">
          <button className="navbar-item-btn">
              Signin
          </button>
      </a>
  </section>
  )

}

export default Navbar;
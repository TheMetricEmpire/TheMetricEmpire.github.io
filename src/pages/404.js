import React from 'react'
import Layout from '../components/layout'
import { Link } from "gatsby"
import icon from '../assets/images/header_icon.png'

const NotFoundPage = () => (
  <section id="one" className="main style1 special">
    <div>
    <img src={icon} style={{width: 150, height: 150}} alt="" />
    </div>
    <div>
    <header className= "major">
    <h1>Oops!</h1>
    <h2>404 - Page Not Found</h2>
    </header>
    <p>Sorry! It seems the page you are looking for might have been removed, had its name changed or is temporarily unavailable.</p>
    <center>
      Better head back to <Link to="/">homepage</Link>.
    <p></p>
    </center>
  </div>  
  </section>

)

export default NotFoundPage

import React from 'react'
import './Home.css'

const Navbar = () => {
  return (
    <nav>
        <div className = "nav-logo">
            <img src = "/images/logo.png" alt = "logo"></img>
            <ul>
				      <li>Home</li>
				      <li>About Us</li>
			        <li>Products</li>
				      <li>Support</li>
			     </ul>
        </div>
        <div className = "sub-nav">
          <ul>
				      <li>New Arrivals</li>
				      <li>Hot Deals</li>
			        <li className='wom-btn'>Women's
                <div className='wom-nav'>
                  <div className='cardi'>
                    <p>20% off on cardigans</p>
                    <img src = "/images/cardiganWomen.jpg" alt = "sweaterimg"></img>
                    <img src = "/images/cardiWomen.jpg" alt = "sweaterimg"></img>
                  </div>
                  <div className = 'tools'>
                    <p>Get Crochet Tool Bundles</p>7
                    <img src = "/images/crochetKit.jpg" alt = "toolimg"></img>
                    <img src = "/images/sewingKit.jpg" alt = "toolimg"></img>
                  </div>
                </div>
              </li>
				      <li className='men-btn'>Men's
                <div className='men-nav'>
                  <div className='sweaterM'>
                    <p>Men's Sweater</p>
                    <img src = "/images/sweaterMen.jpg" alt = "sweaterimg"></img>
                    <img src = "/images/sweaterMen2.jpg" alt = "sweaterimg"></img>
                  </div>
                  <div className = 'cardiM'>
                    <p>Get Crochet Tool Bundles</p>
                    <img src = "/images/cardiMen.jpg" alt = "crochetimg"></img>
                    <img src = "/images/cardiganMen.webp" alt = "crochetimg"></img>
                  </div>
                </div>
              </li>
              <li>Yarn Collection</li>
			     </ul>
        </div>
    </nav>
  )
}
export default Navbar
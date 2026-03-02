import React from 'react'
import { FaShoppingCart } from "react-icons/fa"
import './Home.css'

export const Navbar = () => {
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
    </nav>
  )
}
export default Navbar 
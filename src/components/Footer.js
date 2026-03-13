import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
        <hr></hr>
        <div className='footer-container'>
            <div className='welcome'>
                <h1>Welcome</h1>
                <p>Welcome to this creative space where you can learn how to crochet or enhance your skills. 
                    This website is packed full of hints, tips, tutorials and inspiration for all skill levels.</p>
            </div>
            <div className='links'>
                <h1>Quick Links</h1>
                <ul>
                    <li>Account Login</li>
                    <li>Privacy policy</li>
                    <li>Terms & conditions</li>
                    <li>Shipping & returns</li>
                    <li>Contact us</li>
                </ul>
            </div>
            <div className='News'>
                <h1>Newsletter</h1>
                <p>Sign up for exclusive offers, original stories, events and more...</p>
                <input type='email' placeholder='Enter Your Email' class = 'email'/>
            </div>
        </div>
        <hr></hr>
        <p className='end-note'>©2025 Yaniverse powered by Cloudflare</p>
    </div>
  )
}

export default Footer
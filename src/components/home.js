import React from 'react'
import Navbar from './Navbar'
import './Home.css'
import Front from './front'

const Home = () => {
  return (
    <div className = "home-container">
        <Navbar></Navbar>
        <Front></Front>
    </div>
  )
}

export default Home
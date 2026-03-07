import React from 'react'
import Navbar from './Navbar'
import Arrival from './Arrival'
import './Home.css'
import Front from './front'

const Home = () => {
  return (
    <div className = "home-container">
        <Navbar></Navbar>
        <Front></Front>
        <Arrival></Arrival>
    </div>
  )
}

export default Home
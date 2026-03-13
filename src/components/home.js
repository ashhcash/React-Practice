import React from 'react'
import Navbar from './Navbar'
import Arrival from './Arrival'
import './Home.css'
import Front from './front'
import Blog from './Blog'

const Home = () => {
  return (
    <div className = "home-container">
        <Navbar></Navbar>
        <Front></Front>
        <Arrival></Arrival>
        <Blog></Blog>
    </div>
  )
}

export default Home
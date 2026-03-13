import React from 'react'
import Item2 from './Item2'
import "./Home.css"
const Blog = () => {
  return (
    <div className='b-container'>
        <h1>Follow Our Blog</h1>
        <h4>Dive into our blog where you will find hundreds of blog posts from tips and techniques, 
            an extensive stitch library, free crochet patterns and more...
        </h4>
        <div className='b-items'>
            {items.map((item2) =>(
                <Item2
                   key = {item2.id}
                   image = {item2.image}
                   title = {item2.title}
                />
            ))}
        </div>
    </div>
  )
}

const items = [
    {
        id : 1 ,
        title : 'Learn how to make this crochet basket',
        image : "/images/basket.jpg"
    },
    {
        id : 2 , 
        title : 'Make this cute puffin plushie',
        image : "/images/puffin.jpg"
    },
        {
        id : 3 , 
        title : 'Get the pattern for this beautiful star blanket',
        image : "/images/starBlanket.jpg"
    },
        {
        id : 4 , 
        title : '10 beautiful shawl patterns',
        image : "/images/shawl.jpg"
    },
        {
        id : 5 , 
        title : 'Make this simple beanie with only one stitch!',
        image : "/images/beanie.jpg"
    },
        {
        id : 6 , 
        title : 'How to make a hexagon granny square?',
        image : "/images/hexagon.jpg"
    }

]

export default Blog
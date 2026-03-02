import React, { useEffect, useState } from "react";
import './Home.css'

const images = [
    "/images/cardigans.png",
    "/images/flowers.png" , 
    "/images/keychains.png"
];

export const Front = () => {
    const [current , setCurrent] = useState(0);

    useEffect (() =>{
        const interval = setInterval(() =>{
            setCurrent((prev)=> (prev+1) % images.length);
        }, 4000);

        return () => clearInterval(interval);
    } , []);

    return (
        <div className="slider">
            <div className="slider-track" style = {{ transform: `translateX(-${ current * 100}%)`}}>
                {images.map((img , index) =>(
                    <img key ={index} src = {img} alt = "slide"></img>
                ))}
            </div>

            <div className = "dots">
                {images.map((_, index)=>(
                    <span key ={index} className={current === index ? "dot active" : "dot"} onClick={() => setCurrent(index)}></span>
                ))}
            </div>
        </div>
    );
    

};

export default Front
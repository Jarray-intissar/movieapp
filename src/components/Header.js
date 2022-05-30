import React from 'react'
import ReactStars from 'react-rating-stars-component';
import  './Header.css';

function header({settext,setrate}) {
  return (
      <>
   <nav>
      <h1>M<span style={{color:"red"}}>O</span>VIE</h1>
      <div className='content'>
        <a href="#" >Home</a>
        <a href="#" >About</a>
        <a href="#">Contact</a>
       </div>
                  
        <input 
         type="text" 
         placeholder=" search for a movie...." onChange={(e) => settext(e.target.value)}
         />
       <ReactStars
    count={5}
    size={24}
    activeColor="#ffd700"
    onChange={(newRating)=>setrate(newRating)}
  />,
     
  </nav>

</>
  )
}

export default header
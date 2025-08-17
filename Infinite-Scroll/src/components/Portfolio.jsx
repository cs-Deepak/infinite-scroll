import React from 'react'
import '../App.css'
const Portfolio = () => {
  return (
    <>
        
      <div className='portfolio-text'>

        <h1 className='title '>portfolio</h1>
        <p className="dancing-bold, para1" style={{ color: "#FFD700"  }}>Deepak Kumar Yadav</p>
        <p className='para2'>
          
          
           MERN <span className="highlight">STACK</span></p>

      </div>



      <div className='main-demo'>



        <div className='text-demo'>
          <h1 className='namste'>Namashte, </h1>
          <p>I am Deepak Yadav</p>
          <p>Greetings, ladies and gentlemen. Allow me to introduce myself</p>

          <p>I am a Self-made, passionate creative design and Web Developer, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro cum necessitatibus autem deserunt saepe molestias in cupiditate! Facere, inventore itaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, eligendi!</p>

        </div>



        <div className='img-demo'>
          <img src={profile} alt="" style={{ filter: "grayscale(100%) contrast(150%) brightness(120%)" }} />
        </div>
      </div>
    
    </>
  )
}

export default Portfolio
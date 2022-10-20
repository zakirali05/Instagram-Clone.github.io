import React from 'react'
import rock from './rock.jpg'
import home from './home.png'
import search from './search.png'
import reel from './reel.png'
import heart from './heart.png'


function Bottom() {
  return (
    <div className='bottom'>
     <img  className='home'  src={home}></img>  
   <img  className='search'  src={search}></img>  
     <img  className='reel'  src={reel}></img>
     <img  className='like'  src={heart}></img>
    <img className='profile3' src={rock} ></img>

    </div>
  )
}

export default Bottom
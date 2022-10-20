import React from 'react'
import logo from './logo.png'
import addpost from './add-img.png'
import messages from './messg.jpg'



function Nav() {
  return (
    <div className='navigation-bar'>
        <div className='logo'><img src={logo} ></img></div>
        <div className='menu-items'>
            <img className='add-post' src={addpost}></img>
            <img className='messages' src={messages}></img>
        </div>
    </div>
  )
}

export default Nav
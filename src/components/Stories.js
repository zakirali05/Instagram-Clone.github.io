import React from 'react'
// import rock from './rock.jpg'
function Stories(props) {
  return (
    <div className='story-logo'>
    <img  className="profile-photo"src={props.img}></img>
    </div>
  )
}

export default Stories
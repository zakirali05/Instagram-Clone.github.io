import React from 'react'
// import dots from './dots.png'
import tick from './images/tick.png'
import rock from './rock.jpg'


function Post(props) {
  return (
   <div className='feed-wrapper'>
   <div className='one'>
    <div className='onea'>
  <img src={props.profile} className='profile-photo2'></img>
  <h4 className='username'>{props.username}</h4><span className='tick'><img src={tick}></img></span>
  </div>
  <div className='oneb'>
  <h2>...</h2>
  </div>

   </div>
   <div className='two'>
 <img className='main-post'  src={props.main} ></img>

   </div>
  <div className='three'>
 <div className='threea'>
 
 <i class="fa-regular fa-heart fa-lg"></i>
 <i class="fa-regular fa-comment  fa-lg"></i>
 <i class="fa-regular fa-share-from-square fa-lg"></i>

 </div>
<div className='threeb'>
<i class="fa-regular fa-bookmark  fa-lg"></i>
</div>

  </div>
  <div className='fourth'>Liked by <b>zakirali</b> and <b>134,344 others</b></div>
  <div className='fifth'><b>{props.username}</b><span> i always beleave in my style , and had confidence in it......</span></div>
  <div className='sixth'>view all 10,000 comments</div>
  <div className='seventh'>1 hour ago</div>
  <div className='eight'><img className='comment'  src={rock}></img>
  <input className='input' type="text"  placeholder='add a comment here...' ></input>

  </div>
   </div>
  )
}

export default Post
import React from 'react'
import Stories from './Stories'
import rock from './rock.jpg'
import brad from './bradpit.jpg'
import emilia from './emilia.jpg'
import joli from './joli.jpg'
import salmandp from './images/salman-dp.jpg'
import tomdp from './images/tom-dp.jpg'
import windp from './images/win-dp.jpg'
// import rajdp from './images/rajdp.jpg'
import ayushmandp from './images/ayushmandp.jpg'
// import kartikdp from './images/kartikdp.jpg'
// import rdjdp from './images/rdjdp.jpg'
// import chrisdp from './images/chrisdp.jpg'
// import amirpost from './images/amirpost.jpg'
import saifpost from './images/saifpost.jpg'
// import salmanpost from './images/salmanpost.jpg'
// import tompost from './images/tompost.jpg'
// import kartikpost from './images/kartikpost.jpg'
// import ayushmanpost from './images/ayushmanpost.jpg'
import rajpost from './images/rajpost.jpg'
import rdjpost from './images/rdjpost.jpg'
// import chrispost from './images/chrispost.jpg'
// import winpost from './images/winpost.jpg'
// import Search from '../pages/search'
import kakashidp from './images/kakshidp.jpg'
// import kakashipost1 from './images/kakashi.jpg'
// import kakashipost2 from './images/kakashi2.jpg'

function Storyfeed() {
  return (
    <div className='story-feed'>
   <Stories img={rock} />
   <Stories img={brad} />
   <Stories img={emilia} />
   <Stories img={joli} />
   <Stories img={salmandp} />
   <Stories img={saifpost} />
   <Stories img={ayushmandp} />
   <Stories img={rajpost} />
   <Stories img={rdjpost} />
   <Stories img={kakashidp} />
   <Stories img={windp} />
   <Stories img={tomdp} />
   {/* <Stories img={joli} /> */}
   {/* <Stories img={rock} /> */}
   {/* <Stories img={rock} /> */}
   {/* <Stories img={rock} /> */}
   </div>
  )
}

export default Storyfeed
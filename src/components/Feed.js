import React from 'react'
import Post from './post'
import shah from './shah.jpg'
import shah2 from './shah2.jpg'
import amirdp from './images/amir-dp.jpg'
import saifdp from './images/saif-dp.jpg'
import salmandp from './images/salman-dp.jpg'
import tomdp from './images/tom-dp.jpg'
import windp from './images/win-dp.jpg'
import rajdp from './images/rajdp.jpg'
import ayushmandp from './images/ayushmandp.jpg'
import kartikdp from './images/kartikdp.jpg'
import rdjdp from './images/rdjdp.jpg'
import chrisdp from './images/chrisdp.jpg'
import amirpost from './images/amirpost.jpg'
import saifpost from './images/saifpost.jpg'
import salmanpost from './images/salmanpost.jpg'
import tompost from './images/tompost.jpg'
import kartikpost from './images/kartikpost.jpg'
import ayushmanpost from './images/ayushmanpost.jpg'
import rajpost from './images/rajpost.jpg'
import rdjpost from './images/rdjpost.jpg'
import chrispost from './images/chrispost.jpg'
import winpost from './images/winpost.jpg'
// import Search from '../pages/search'
import kakashidp from './images/kakshidp.jpg'
import kakashipost1 from './images/kakashi.jpg'
import kakashipost2 from './images/kakashi2.jpg'

function Feed() {
  return (
    <div className='feed' >
        <Post profile ={shah} username="Jiraya"  main={shah2} />
        <Post profile ={amirdp} username="UchihaSasuke"  main={amirpost} />
        <Post profile ={saifdp} username="UchihaItachi"  main={saifpost} />
        <Post profile ={salmandp} username="itsAkatsuki"  main={salmanpost} />
        <Post profile ={tomdp} username="TeamMinato"  main={tompost} />
        <Post profile ={windp} username="itsAkatsuki"  main={winpost} />
        <Post profile ={kartikdp} username="Nagato_pain"  main={kartikpost} />
        <Post profile ={ayushmandp} username="UchihaBrothers"  main={ayushmanpost} />
        <Post profile ={rajdp} username="Nagato_pain"  main={rajpost} />
        <Post profile ={rdjdp} username="UchihaSasuke"  main={rdjpost} />
        <Post profile ={chrisdp} username="KakashiHatake"  main={chrispost} />
        <Post profile ={kakashidp} username="KakashiHatake"  main={kakashipost1} />
        <Post profile ={kakashidp} username="KakashiHatake"  main={kakashipost2} />
      
        </div>
  )
}

export default Feed
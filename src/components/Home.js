import React from 'react'
import Storyfeed from './story-feed';
import Nav from './Nav';
import Feed from './Feed';
import Bottom from './bottom'

function Home() {
  return (
    <div className='wrapper'>
    <Nav/>
    <Storyfeed/>
    <Feed/>
    <Bottom/>
    </div> 
 
  )
}

export default Home
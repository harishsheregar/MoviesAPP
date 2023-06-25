import React from 'react';
import './style.scss'
import Herobanner from './Herobanner/Herobanner';
import Trending from '../trending/Trending';
import Popular from './popular/Popular';
import Toprated from './Toprated/Toprated';


const Home = () => {
  return (
    <div>
        <Herobanner/>
        <Trending/>
        <Popular/>
        <Toprated/>
        <div >

        </div>
    </div>
  )
}

export default Home
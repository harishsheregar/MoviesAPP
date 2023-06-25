import React, { useState } from 'react'
import ContentWrapper from '../components/ContentWrapper/ContentWrapper';
import './style.scss'
import Switchtabs from '../components/switchtabs/Switchtabs';
import useFetch from "../hooks/useFetch";
import Carousel from '../components/Carousel/Carousel';

const Trending = () => {
  const[endpoint,setEndpoint]=useState("day")

  const{data,loading}=useFetch(`/trending/all/${endpoint}`)
 
  const onTabChange=(tab)=>{

setEndpoint(tab==="Day" ? "day" :"week")
  }
  return (
    <div className='carouselSection'>
        <ContentWrapper>
            <span className='carouselTitle'>Trending</span>
            <Switchtabs data={["Day","Week"]} onTabChange={onTabChange}/>
        </ContentWrapper>
        <Carousel data={data?.results} loading={loading}/>
    </div>
  )
}

export default Trending
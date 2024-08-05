import React from 'react'
import { Navbar } from '../../components/Navbar'
import { ProfileCard } from '../../components/profileCard'
import { Awards } from '../../components/awards'
import { GifPlayer } from '../../components/gifPlayer'
import gifOne from "../../assets/IMG_0285.gif";
import gifTwo from "../../assets/IMG_0286.gif";
import dpImg from "../../assets/cp.png";
import cpImg from "../../assets/dp.png";

export const Home = () => {
  return (
    <div className="container max-w-custom mx-auto px-[2.219rem] md:px-[1rem]">
      <Navbar/>
      <ProfileCard/>
      <Awards/>
      <div className='flex flex-col md:flex-row py-[2.063rem] gap-[1.375rem]'>
       <GifPlayer path='/designer' image={dpImg} gif={gifTwo}/>
       <GifPlayer path='/colourist' image={cpImg} gif={gifOne}/>
      </div>
    </div>
  )
}

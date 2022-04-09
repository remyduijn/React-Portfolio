import '../../styles/Background.css'
import React from 'react'
import { HeroContainer, HeroBg, HeroContent, HeroH1, HeroP } from './HeroElements'

const HeroSection = () => {
  return (
    <HeroContainer>
        <HeroBg>
            <div className='masthead'></div>
        </HeroBg>
        <HeroContent>
            <h1></h1>
            {/* <HeroP>Personal Website Template</HeroP> */}
        </HeroContent>
    </HeroContainer>
  ) 
}

export default HeroSection
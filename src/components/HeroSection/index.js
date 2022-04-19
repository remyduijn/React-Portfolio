import React, { useState } from 'react';
import { Button } from '../ButtonElements';
import '../../styles/Hero.css'
import {
  HeroContainer,
  HeroBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight
} from './HeroElements';

function HeroSection() {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };  
  return (
    <HeroContainer id='home'>
      <HeroBg>
        <div className='masthead'></div>
      </HeroBg>
      <HeroContent>
        <HeroH1>React.js Portfolio Website</HeroH1>
        <HeroP>
          Some text here
        </HeroP>
        <HeroBtnWrapper>
          {/* <Button
            to='signup'
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
            primary='true'
            dark='true'
            onMouseEnter={onHover}
            onMouseLeave={onHover}
          >
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button> */}
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
}

export default HeroSection;

import React from 'react';
import '../../styles/About.css'
import img1 from '../../images/resume.svg';
import Pdf from '../../pdf/resume_RD.pdf'

import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  Button,
  Button2,
  ImgWrap,
  Img, 
} from './ResumeElements';

const AboutSection = () => {
  console.log(); 
  return ( 
    <>
      <InfoContainer id='resume'>
        <InfoWrapper>
          <InfoRow>
            <Column1>
              <TextWrapper>
                <TopLine>Resume</TopLine>
                <Heading>Thanks for scrolling</Heading>
                <Subtitle>If you need similar design work or have other projects or need a developer for your team, feel free to contact me.</Subtitle>
                <BtnWrap>
                  <a href={Pdf} target="_blank">
                    <Button>Download Resume</Button>
                  </a>
                  <a href='/Contact'>
                    <Button2>Contact Me</Button2> 
                  </a>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img1} alt='resume' />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default AboutSection;

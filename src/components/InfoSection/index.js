import React from 'react';
import '../../styles/About.css'
import { Button } from '../ButtonElements';
import img1 from '../../images/svg-4.svg';
import img2 from '../../images/browser.png';
import img3 from '../../images/laptop.png';
import img4 from '../../images/cloud.png';
import img5 from '../../images/diagram.png';

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
  ImgWrap,
  Img
} from './InfoElements';

const InfoSection = ({
  lightBg,
  imgStart,
  topLine,
  lightText,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  id,
  primary,
  darkText,
  dark,
  dark2
}) => {
  console.log(primary); 
  return ( 
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <h1>What I can do</h1>
                <div class="line"></div>
                {/* <FontAwesomeIcon icon="fa-solid fa-code" /> */}
                <div class="about-text">
                  <h3>Front-end web development</h3>
                  <p>test test</p>
                </div>
                <img class="img-position" src={img2} alt="" width="45" height="45"></img>
                <div class="about-text">
                  <h3>Performance optimization</h3>
                  <p>test test</p>
                </div>
                <img class="img-position" src={img3} alt="" width="45" height="45"></img>
                <div class="about-text">
                  <h3>Back-end programming</h3>
                  <p>test test</p>
                </div>
                <img class="img-position" src={img4} alt="" width="45" height="45"></img>
                <div class="about-text">
                  <h3>Application deployment management</h3>
                  <p>test test</p>
                </div>
                <img class="img-position" src={img5} alt="" width="45" height="45"></img>

                {/* <BtnWrap>
                  <Button
                    to='home'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrap> */}
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img1} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;

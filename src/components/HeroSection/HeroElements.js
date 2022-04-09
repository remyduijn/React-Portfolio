import styled from 'styled-components'

export const HeroContainer = styled.div`
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 0;
`
export const HeroBg = styled.div`
    position: absolute; 
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    // width: 100%;
    // height: 100%;
    margin-bottom: -1.5rem;
    overflow: hidden;
`
export const HeroContent = styled.div`
    z-index: 3;
    // max-width: 1200px;
    // position: absolute;
    // padding: 8px 24px;
    // display: flex;
    // flex-directions: column;
    // align-items: center;
`

// export const HeroH1 = styled.h1`
//     font-family: 'Montserrat Alternates', sans-serif;
//     text-align: right;
//     color: white;
//     padding-top: 10rem;
//     margin-right: 10rem;
//     text-shadow: rgb(120, 120, 120) 0px 1px 5px;
//     font-size: 2.5rem;
// `
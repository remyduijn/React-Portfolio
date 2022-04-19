import styled from 'styled-components';

export const PortfolioContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // background: #ffd740;

  // background: #fff;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  // padding: 0 30px;
  // height: 800px;
  position: relative;
  z-index: 1;

  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        to bottom,
        rgba(255, 215, 64, 1) 0%,
        rgba(255, 215, 64, 1) 100%
      );
      // linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
  }


 
  @media screen and (max-width: 768px) {
    height: 1100px;
  }
  
  @media screen and (max-width: 480px) {
    height: 1300px;
  }
  `;
  
export const PortfolioWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;
  z-index: 3;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const PortfolioCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const PortfolioIcon1 = styled.img`
  height: 160px;
  width: 160px;
  padding-bottom: 18px;
  padding-top: 12px;
  margin-bottom: 10px;
`;

export const PortfolioIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const PortfolioH1 = styled.h1`
  font-size: 2.5rem;
  color: #263238;
  margin-bottom: 64px;
  z-index: 3;
  // text-decoration: 4px underline #ffab00;
  // text-underline-offset: 1rem;

  @media (min-width: 1000px) {
    margin-top: -2rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const PortfolioH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
  color: #263238;
`;

export const PortfolioP = styled.p`
  font-size: 1rem;
  text-align: center;
  color: #546e7a;
`;
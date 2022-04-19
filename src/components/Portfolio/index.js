import React from 'react';
import '../../styles/Portfolio.css'
import Icon1 from '../../images/svg-2.svg';
import Icon2 from '../../images/svg-7.svg';
import Icon3 from '../../images/svg-5.svg';
import {
  PortfolioContainer,
  PortfolioH1,
  PortfolioWrapper,
  PortfolioCard,
  PortfolioIcon1,
  PortfolioIcon,
  PortfolioH2,
  PortfolioP
} from './PortfolioElements';

const Portfolio = () => {
  return (
    <PortfolioContainer id='portfolio'>
      <PortfolioH1>Portfolio</PortfolioH1>
      <div class="line2"></div>
      <PortfolioWrapper>
        <a href='https://www.ikigaibrazil.com/' target="_blank" rel="noopener noreferrer">
        <PortfolioCard>
          <PortfolioIcon1 src={Icon1} />
          <PortfolioH2>Ikigai Brazil</PortfolioH2>
          <PortfolioP>
            Travel and immigration blog in Brazil.
          </PortfolioP>
        </PortfolioCard></a>
        <a href='' target="_blank" rel="noopener noreferrer">
        <PortfolioCard>
          <PortfolioIcon src={Icon2} />
          <PortfolioH2>Nutrition Needs</PortfolioH2>
          <PortfolioP>
            Web program about food and nutrition.
          </PortfolioP>
        </PortfolioCard></a>
        <a href='' target="_blank" rel="noopener noreferrer">
        <PortfolioCard>
          <PortfolioIcon src={Icon3} />
          <PortfolioH2>Wordpress</PortfolioH2>
          <PortfolioP>
            Luxury real estate portfolio website
          </PortfolioP>
        </PortfolioCard></a>
      </PortfolioWrapper>
    </PortfolioContainer>
  );
};

export default Portfolio;

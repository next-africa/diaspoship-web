//React
import React from 'react';
import { FormattedMessage } from 'react-intl';
// Styled
import styled from 'styled-components';

//App Imports
import SearchForm from './SearchForm';

let SliderWrapper = styled.div`
  height: 587px;
  position: relative;
  padding: 160px 0 0;
  background-image: url(../../img/slide.jpg);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  margin: 0;
`;

let ContainerWrapper = styled.div`
  max-width: 1140px;
  margin: 0 auto;
`;
let SearchMessage = styled.div`
  text-align: center;
  margin: 0 0 50px;
  font-size: 1.5em;
`;

let Slider = function() {
  return (
    <div id="content">
      <SliderWrapper>
        <ContainerWrapper>
          <SearchMessage>
            <FormattedMessage id="pages.home.why-prompt" />
          </SearchMessage>
          <SearchForm />
        </ContainerWrapper>
      </SliderWrapper>
    </div>
  );
};

export default Slider;

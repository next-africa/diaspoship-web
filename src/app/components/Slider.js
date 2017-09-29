import React from 'react';
import SearchForm from './SearchForm';
import styled from 'styled-components';

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
            <p>
              Confiez vos colis et vos achats à des particuliers qui voyagent
            </p>
          </SearchMessage>
          <SearchForm />
        </ContainerWrapper>
      </SliderWrapper>
    </div>
  );
};

export default Slider;

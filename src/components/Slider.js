import React from 'react';
import styled from 'styled-components';
import SearchForm from './SearchForm';
var SliderWrapper = styled.div`
  height: 587px;
  position: relative;
  padding: 160px 0 0;
  background-image: url(../../img/slide.jpg);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  margin: 0;
`;

var ContainerWrapper = styled.div`
  max-width: 1140px;
  margin: 0 auto;
`;
var SearchMessage = styled.div`
  text-align: center;
  margin: 0 0 50px;
  font-size: 1.5em;
`;
var Slider = function() {
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

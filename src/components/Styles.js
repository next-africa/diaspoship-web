import React from 'react';

import styled from 'styled-components';

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
var InputStyle = styled.input`
  color: #bfbfbf;
  font-size: 18px;
  border: 0;
  border-bottom: 1px dashed #4a4a4a;
  width: 100%;
  padding: 5px;
  border-radius: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;
var SearFormWrapper = styled.div`
  background-color: white;
  margin: 0;
  padding: 0;
  border-radius: 10px;
  margin: 0 0 20px;
  height: 42px;
  display: block;
`;
const SearchButton = styled.button`
  background-color: #ffc800;
  color: #0f233a;
  font-size: 18px;
  font-family: 'Roboto-Medium';
  width: 100%;
  text-transform: uppercase;
  border: 2px solid #ffc800;
  border-radius: 0 10px 10px 0;
  cursor: pointer;
  height: 42px;
`;
var Styles = {
  SliderWrapper: SliderWrapper,
  ContainerWrapper: ContainerWrapper,
  SearchMessage: SearchMessage,
  InputStyle: InputStyle,
  SearFormWrapper: SearFormWrapper,
  SearchButton: SearchButton
};

export default Styles;

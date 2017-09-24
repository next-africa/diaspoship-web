import React from 'react';
import SearchForm from './SearchForm';
import Styles from './Styles';

var Slider = function() {
  return (
    <div id="content">
      <Styles.SliderWrapper>
        <Styles.ContainerWrapper>
          <Styles.SearchMessage>
            <p>
              Confiez vos colis et vos achats à des particuliers qui voyagent
            </p>
          </Styles.SearchMessage>
          <SearchForm />
        </Styles.ContainerWrapper>
      </Styles.SliderWrapper>
    </div>
  );
};

export default Slider;

import React, { Component } from 'react';
import {Helmet} from 'react-helmet';
import Header from './components/Header';
import Slider from './components/Slider';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Helmet>
          <title>Ship your stuff with Diaspoship!</title>
        </Helmet>
        <Header />
        <Slider />
      </div>
    );
  }
}

export default App;

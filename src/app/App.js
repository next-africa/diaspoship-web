import React, { Component } from 'react';
import {Helmet} from "react-helmet";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Helmet>
          <title>Ship your stuff with Diaspoship!</title>
        </Helmet>
      </div>
    );
  }
}

export default App;

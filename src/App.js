import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
class App extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Ship your stuff with Diaspoship!</title>
        </Helmet>
        <Header />
        <SearchForm />
      </div>
    );
  }
}

export default App;

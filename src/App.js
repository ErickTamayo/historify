import React, { Component } from 'react';
import './App.css';
import Header from './containers/Header';
import Filter from './containers/Filter';
import SongList from './containers/SongList';

class App extends Component {
  render() {
    return (
      <div className="container">
      <Header />
      <Filter />
      <SongList />
      </div>
    );
  }
}

export default App;

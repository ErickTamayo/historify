import React, { Component } from 'react';
import './App.css';
import Header from './containers/Header';
import Filter from './containers/Filter';
import SongList from './containers/SongList';

import {
  createFragmentContainer,
  graphql,
} from 'react-relay';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header viewer={this.props.viewer}/>
        <Filter />
        <SongList viewer={this.props.viewer}/>
      </div>
    );
  }
}

export default createFragmentContainer(App, {
    viewer: graphql`
      fragment App_viewer on User {
        ...SongList_viewer,
        ...Header_viewer
      }
    `
});

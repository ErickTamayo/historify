import React, { Component } from 'react';

import {
  createFragmentContainer,
  graphql,
} from 'react-relay';

import Song from '../components/Song';
import './SongList.css';

class SongList extends Component {

  renderSongs() {
    return this.props.viewer.songs.edges.map(edge =>
        <Song key={edge.node.id} song={edge.node} viewer={this.props.viewer} />
      );
  }

  render() {
    return (
      <div className="song-list">
        {this.renderSongs()}
      </div>
    );
  }
}

export default createFragmentContainer(SongList, {
  viewer: graphql`
    fragment SongList_viewer on User {
      songs (
        first: 2147483647 # max GraphQLInt
      ) @connection (key: "SongsList_songs") {
        edges {
          node {
            id,
            ...Song_song
          }
        }
      }
    }
  `
});
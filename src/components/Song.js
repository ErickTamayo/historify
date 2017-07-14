import React, { Component } from 'react';
import './Song.css';

import {
  createFragmentContainer,
  graphql,
} from 'react-relay';

class Song extends Component {
  render() {
    return (
      <div className="song">
        <div className="song__info">
          <div className="song__number">{this.props.song.id}</div>
          <div className="song__image">
            <img src={this.props.song.image} alt="" />
          </div>
          <div className="">
            <div className="song__name">{this.props.song.name}</div>
            <div className="song__artist">{this.props.song.artist}</div>
          </div>
        </div>
        <div className="song__stats">
          <div className="stats__item">Total Plays: {this.props.song.totalPlays}</div>
          <div className="stats__item">Played today at {this.props.song.playedTodayAt}</div>
        </div>
      </div>
    );
  }
}

export default createFragmentContainer(Song, {
  song: graphql`
    fragment Song_song on Song {
      name,
      artist,
      image,
      totalPlays
    }
  `
});

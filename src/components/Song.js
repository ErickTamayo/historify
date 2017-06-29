import React, { Component } from 'react';
import './Song.css';

class Song extends Component {
  render() {
    return (
      <div className="song">
        <div className="song__info">
          <div className="song__number">{this.props.id}</div>
          <div className="song__image">
            <img src={this.props.image} alt="" />
          </div>
          <div className="">
            <div className="song__name">{this.props.name}</div>
            <div className="song__artist">{this.props.artist}</div>
          </div>
        </div>
        <div className="song__stats">
          <div className="stats__item">Total Plays: {this.props.totalPlays}</div>
          <div className="stats__item">Played today at {this.props.playedTodayAt}</div>
        </div>
      </div>
    );
  }
}

export default Song;

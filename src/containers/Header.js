import React, { Component } from 'react';

import './Header.css';

import {
  createFragmentContainer,
  graphql,
} from 'react-relay';

let styles = {};

class Header extends Component {

    render() {
        return (
          <div className="header">
            <div className="profile__container">
                <div>
                    <img className="profile__image" src={this.props.viewer.profileImg} alt=""/>
                </div>
                <div className="profile__description">
                    <div style={styles.profile__title}>{this.props.viewer.name}'s Historify</div>
                    <div className="subtitle">
                        <div className="subtitle__item">Your Spotify history</div>
                        <div className="subtitle__item">logout</div>
                    </div>
                </div>
            </div>
            <div className="stats__container">
                <div className="stats__item">
                    <div className="item__number">{this.props.viewer.playedAllTime}</div>
                    <div className="item__description">All time</div>
                </div>
                <div className="stats__item">
                    <div className="item__number">{this.props.viewer.playedThisWeek}</div>
                    <div className="item__description">Songs played <br/> this week</div>
                </div>
            </div>
          </div>
        );
    }
}

styles = {
    profile__title: {
        fontSize: '27px',
        color: '#4A4A4A',
    }
}


export default createFragmentContainer(Header, {
  viewer: graphql`
    fragment Header_viewer on User {
      name,
      profileImg,
      playedAllTime,
      playedThisWeek
    }
  `
});

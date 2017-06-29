import { connect } from 'react-redux';
import React, { Component } from 'react';
import { fetchProfile } from '../actions/profile';

import './Header.css';

let styles = {};

class Header extends Component {

    componentDidMount() {
        this.props.fetchProfile();
    }

    render() {
        console.log(this.props.profile);
        return (
          <div className="header">
            <div className="profile__container">
                <div>
                    <img className="profile__image" src={this.props.profile.profileImg} alt=""/>
                </div>
                <div className="profile__description">
                    <div style={styles.profile__title}>{this.props.profile.name}'s Historify</div>
                    <div className="subtitle">
                        <div className="subtitle__item">Your Spotify history</div>
                        <div className="subtitle__item">logout</div>
                    </div>
                </div>
            </div>
            <div className="stats__container">
                <div className="stats__item">
                    <div className="item__number">{this.props.profile.played.allTime}</div>
                    <div className="item__description">All time</div>
                </div>
                <div className="stats__item">
                    <div className="item__number">{this.props.profile.played.thisWeek}</div>
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

const mapStateToProps = state => {
    return {
        profile: state.profile,
    }
}

const mapDispatchToProps = {
    fetchProfile,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);

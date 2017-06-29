import { connect } from 'react-redux';
import React, { Component } from 'react';
import Song from '../components/Song';
import { fetchSongs } from '../actions/songs';
import './SongList.css';

class SongList extends Component {
  componentDidMount() {
      this.props.fetchSongs();
  }

  render() {
    console.log(this.props);
    return (
      <div className="song-list">
        {
          this.props.songs.map(song => {
            return <Song key={song.id} {...song}/>
          })
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
      songs: state.media.songs,
    }
}

const mapDispatchToProps = {
    fetchSongs,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SongList);
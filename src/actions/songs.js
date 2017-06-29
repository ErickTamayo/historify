import fetch from 'isomorphic-fetch';

export const SONG_RECEIVE = 'SONG_RECEIVE';

const receiveSongs = (songs) => {
    return {
        type: SONG_RECEIVE,
        songs
    }
}

export const fetchSongs = () => dispatch => {

  return fetch('/api/songs')
    .then(response => response.json())
    .then((json) => {
        dispatch(receiveSongs(json));
    });
}
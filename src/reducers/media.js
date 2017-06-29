import { SONG_RECEIVE } from '../actions/songs';

const initialMediaState = {
    songs: [],
}

const media = (state = initialMediaState, action ) => {
    switch (action.type) {
        case SONG_RECEIVE:
            return Object.assign({}, state, {
                songs: action.songs
            });
        default:
            return state;
    }
}

export default media;
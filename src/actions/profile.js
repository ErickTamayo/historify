import fetch from 'isomorphic-fetch';

export const PROFILE_RECEIVE = 'PROFILE_RECEIVE';

const receiveProfile = (profile) => {
    return {
        type: PROFILE_RECEIVE,
        profile
    }
}

export const fetchProfile = () => dispatch => {

  return fetch('/api/profile')
    .then(response => response.json())
    .then((json) => {
        dispatch(receiveProfile(json));
    });
}
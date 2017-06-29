import { PROFILE_RECEIVE } from '../actions/profile';

const initialProfileState = {
    name: '',
    profileImg: '',
    'played': {
        'allTime': 0,
        'thisWeek': 0
    }
}

const profile = (state = initialProfileState, action ) => {
    switch (action.type) {
        case PROFILE_RECEIVE:
            return Object.assign({}, state, action.profile);
        default:
            return state;
    }
}

export default profile;
import {
    SET_USER,
} from '../../utils/constants/actionTypes';

const INITIAL_STATE = {
    user: {},
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_USER:
            console.log(action, 'action payload')
            return {
                user: action.payload
            };
        default:
            return state;
    }
};
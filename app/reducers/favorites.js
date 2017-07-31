import { REHYDRATE } from 'redux-persist/constants';
import {
    ACTION_ADD
} from 'actions/action-favorites';

export default favorites;

const initialState = { };

function favorites(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case REHYDRATE: {
            return { ...state, ...payload.favorites };
        }
        case ACTION_ADD: {
            return {
                ...state,
                ids: payload.ids
            };
        }
        default:
            return state;
    }
}

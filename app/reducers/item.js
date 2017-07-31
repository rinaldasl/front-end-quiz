import {
    ACTION_SEND_REQ,
    ACTION_SEND_RES,
    DESTROY
} from 'actions/action-item';

export default item;

const initialState = {
    loading: false
};

function item(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case ACTION_SEND_REQ: {
            return {
                ...state,
                loading: true
            };
        }
        case ACTION_SEND_RES: {
            return {
                ...state,
                ...payload.data,
                loading: false
            };
        }
        case DESTROY: {
            return { ...initialState };
        }
        default:
            return state;
    }
}

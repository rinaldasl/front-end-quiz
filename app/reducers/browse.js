import {
    ACTION_SEND_REQ,
    ACTION_SEND_RES,
    DESTROY
} from 'actions/action-browse';

export default browse;

const initialState = {
    loading: false,
    items: [],
    totalItems: 0
};

function browse(state = initialState, action) {
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
                loading: false,
                items: state.items.concat(payload.items),
                totalItems: payload.totalItems
            };
        }
        case DESTROY: {
            return { ...initialState };
        }
        default:
            return state;
    }
}

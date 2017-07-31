import itemsService from 'services/items';

export const PREFIX = 'actionItem';
export const ACTION_SEND_REQ = `${PREFIX}.ACTION_SEND_REQ`;
export const ACTION_SEND_RES = `${PREFIX}.ACTION_SEND_RES`;
export const DESTROY = `${PREFIX}.DESTROY`;

export function getItemById(id) {
    return dispatch => {
        dispatch({ type: ACTION_SEND_REQ });
        itemsService.fetchItemById(id)
            .then(data => dispatch({
                type: ACTION_SEND_RES,
                payload: { data }
            }))
            .catch(err => console.error(err));
    };
}

export function destroy() {
    return dispatch => {
        dispatch({ type: DESTROY });
    }
}

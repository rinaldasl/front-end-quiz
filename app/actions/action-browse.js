import itemsService from 'services/items';

export const PREFIX = 'actionBrowse';
export const ACTION_SEND_REQ = `${PREFIX}.ACTION_SEND_REQ`;
export const ACTION_SEND_RES = `${PREFIX}.ACTION_SEND_RES`;
export const DESTROY = `${PREFIX}.DESTROY`;

export function getItems(start) {
    return dispatch => {
        dispatch({ type: ACTION_SEND_REQ });
        itemsService.fetchItems(start)
            .then(({ items, totalItems }) => dispatch({
                type: ACTION_SEND_RES,
                payload: { items, totalItems }
            }))
            .catch(err => console.error(err));
    };
}

export function destroy() {
    return dispatch => {
        dispatch({ type: DESTROY });
    }
}

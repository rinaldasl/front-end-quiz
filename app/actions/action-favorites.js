import _ from 'lodash';
export const PREFIX = 'actionFavorites';
export const ACTION_ADD = `${PREFIX}.ACTION_ADD`;

export function toggle(id) {
    return (dispatch, getState) => {
        const { ids = [] } = getState().favorites;
        if (ids.indexOf(id) !== -1) {
            _.remove(ids, i => i === id);
        } else {
            ids.push(id);
        }
        dispatch({ type: ACTION_ADD, payload: { ids } });
    };
}

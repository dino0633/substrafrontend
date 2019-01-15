const initialState = {
    by: 'name',
    direction: 'asc',
};

export default actionTypes => (state = initialState, {type, payload}) => {
    switch (type) {
        case actionTypes.order.SET:
            return {
                ...state,
                ...payload,
            };
        default:
            return state;
    }
};

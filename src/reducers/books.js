import ACTION from "../constants/actions";

const initialState = {
    isReady: false,
    items: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ACTION.SET_BOOKS:
            return {
                ...state,
                items: action.payload.books,
                isReady: true
            };
        case ACTION.SET_IS_READY:
            return {
                ...state,
                isReady: action.payload
            };
        default:
            return state;
    }
}
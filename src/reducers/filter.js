import ACTION from "../constants/actions";

const initialState = {
    searchQuery: '',
    filterBy: 'all'
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ACTION.SET_QUERY:
            return {
                ...state,
                searchQuery: action.payload.value
            };
        case ACTION.SET_FILTER:
            return {
                ...state,
                filterBy: action.payload.filter
            };
        default:
            return state;
    }
}
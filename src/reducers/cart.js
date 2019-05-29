import ACTION from "../constants/actions";

const initialState = {
    items: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ACTION.ADD_BOOK:
            return {
                ...state,
                items: [...state.items, action.payload.book]
            };
        case ACTION.REMOVE_BOOK:
            const index = state.items.findIndex(e => e.id === action.payload.id);
            const result = [...state.items];
            result.splice(index, 1);
            return {
                ...state,
                items: result
            };
        default:
            return state;
    }
}
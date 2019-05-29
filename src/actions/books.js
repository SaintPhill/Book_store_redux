import ACTION from "../constants/actions";

export const setBooks = books => ({
    type: ACTION.SET_BOOKS,
    payload: {
        books
    }
});
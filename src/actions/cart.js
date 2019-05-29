import ACTION from "../constants/actions";

export const addBook = book => ({
    type: ACTION.ADD_BOOK,
    payload: {
        book
    }
});

export const removeBook = id => ({
    type: ACTION.REMOVE_BOOK,
    payload: {
        id
    }
});
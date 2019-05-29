import ACTION from "../constants/actions";

export const setFilter = filter => ({
    type: ACTION.SET_FILTER,
    payload: {
        filter
    }
})

export const setQuery = value => ({
    type: ACTION.SET_QUERY,
    payload: {
        value
    }
});
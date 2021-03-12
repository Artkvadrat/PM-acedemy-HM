const REQUESTED = 'one_photo_page/requested';
const RECEIVED = 'one_photo_page/received';
const UNMOUNTED = 'one_photo_page/unmounted';

const requested = () => ({
    type: REQUESTED,
});

const received = (data) => ({
    type: RECEIVED,
    payload: data,
});

const unmounted = () => ({
    type: UNMOUNTED,
});

export const loadOnePhoto = (id) => (dispatch) => {
    dispatch(requested());

    fetch(`https://jsonplaceholder.typicode.com/photos/${id}?_expand=album`)
        .then((response) => response.json())
        .then((data) => dispatch(received(data)))
}

export const unmountMainPage = () => (dispatch) => {
    dispatch(unmounted());
}

const initialState = {
    isLoading: false,
    photo: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUESTED:
            return {
                ...state,
                isLoading: true,
            }
        case RECEIVED:
            return {
                isLoading: false,
                photo: action.payload,
            }
        case UNMOUNTED:
            return {
                photo: [],
            }
        default:
            return state
    }
}

export default reducer;
const REQUESTED = 'main_page/requested';
const RECEIVED = 'main_page/received';
const UNMOUNTED = 'main_page/unmounted';

const requested = () => ({
    type: REQUESTED,
});

const received = (data, photoBlockCount) => ({
    type: RECEIVED,
    payload: data,
    photoBlockCount: photoBlockCount + 1,
});

const unmounted = () => ({
    type: UNMOUNTED,
});

export const loadPhotos = () => (dispatch, getState) => {
    dispatch(requested());

    let photoBlockCount = getState().mainPage.photoBlockCount;

    fetch(`https://jsonplaceholder.typicode.com/photos?_start=${photoBlockCount*6}&_limit=6`)
        .then((response) => response.json())
        .then((data) => dispatch(received(data, photoBlockCount)))
}

export const unmountMainPage = () => (dispatch) => {
    dispatch(unmounted());
}

const initialState = {
    isLoading: false,
    photos: [],
    photoBlockCount: 0,
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
                photos: [...state.photos, ...action.payload],
                photoBlockCount: action.photoBlockCount,
            }
        case UNMOUNTED:
            return initialState
        default:
            return state
    }
}

export default reducer;
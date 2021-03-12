const REQUESTED_PHOTOS = 'album_page/requested_photos';
const RECEIVED_PHOTOS = 'album_page/received_photos';
const REQUESTED_USER = 'album_page/requested_user';
const RECEIVED_USER = 'album_page/received_user';
const UNMOUNTED = 'album_page/unmounted';

const requestedPhotos = () => ({
    type: REQUESTED_PHOTOS,
});

const receivedPhotos = (data, photoBlockCount) => ({
    type: RECEIVED_PHOTOS,
    payload: data,
    photoBlockCount: photoBlockCount + 1,
});

const requestedUser = () => ({
    type: REQUESTED_USER,
});

const receivedUser = (data) => ({
    type: RECEIVED_USER,
    payload: data,
});

const unmounted = () => ({
    type: UNMOUNTED,
});

export const loadPhotos = (albumId) => (dispatch, getState) => {
    dispatch(requestedPhotos());

    let photoBlockCount = getState().albumPage.photoBlockCount;

    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}&_start=${photoBlockCount*6}&_limit=6`)
        .then((response) => response.json())
        .then((data) => dispatch(receivedPhotos(data, photoBlockCount)))
}

export const loadUser = (albumId) => (dispatch) => {
    dispatch(requestedUser());

    fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}?_expand=user`)
        .then((response) => response.json())
        .then(({user}) => dispatch(receivedUser(user)))
}

export const unmountAlbumPage = () => (dispatch) => {
    dispatch(unmounted());
}

const initialState = {
    isLoading: false,
    photos: [],
    user: {},
    photoBlockCount: 0,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUESTED_PHOTOS:
            return {
                ...state,
                isLoading: true,
            }
        case RECEIVED_PHOTOS:
            return {
                ...state,
                isLoading: false,
                photos: [...state.photos, ...action.payload],
                photoBlockCount: action.photoBlockCount,
            }
        case REQUESTED_USER:
            return {
                ...state,
                isLoading: true,
            }
        case RECEIVED_USER:
            return {
                ...state,
                isLoading: false,
                user: action.payload,
            }
        case UNMOUNTED:
            return initialState
        default:
            return state
    }
}

export default reducer;
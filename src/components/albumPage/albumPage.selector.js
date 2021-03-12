import {createSelector, createStructuredSelector} from "reselect";

const albumPageSelector = (state) => state.albumPage;

const isLoadingSelector = createSelector(
    albumPageSelector,
    ({ isLoading }) => isLoading,
)

const photosSelector = createSelector(
    albumPageSelector,
    ({ photos }) => photos,
)

const userSelector = createSelector(
    albumPageSelector,
    ({ user }) => {
        return user
    },
)

const selector = createStructuredSelector({
    isLoading: isLoadingSelector,
    photos: photosSelector,
    user: userSelector,
})

export default selector;
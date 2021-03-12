import {createSelector, createStructuredSelector} from "reselect";

const mainPageSelector = (state) => state.mainPage;

const isLoadingSelector = createSelector(
    mainPageSelector,
    ({ isLoading }) => isLoading,
)

const photosSelector = createSelector(
    mainPageSelector,
    ({ photos }) => photos,
)


const selector = createStructuredSelector({
    isLoading: isLoadingSelector,
    photos: photosSelector,
})

export default selector;
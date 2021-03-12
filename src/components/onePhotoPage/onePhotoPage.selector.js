import {createSelector, createStructuredSelector} from "reselect";

const onePhotoPageSelector = (state) => state.onePhotoPage;

const isLoadingSelector = createSelector(
    onePhotoPageSelector,
    ({isLoading}) => isLoading,
);

const onePhotoSelector = createSelector(
    onePhotoPageSelector,
    ({ photo }) => photo,
)

const selector = createStructuredSelector({
    isLoading: isLoadingSelector,
    photo: onePhotoSelector,
});

export default selector;
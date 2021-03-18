import { createSelector } from "reselect";

const selector = createSelector(
    state => state.work || [{
        position: '',
        companyName: '',
        dateStart: '',
        dateEnd: '',
    }],
    state => state.education,
    (work, education) => ({
        work,
        education
    })
)

export default selector;
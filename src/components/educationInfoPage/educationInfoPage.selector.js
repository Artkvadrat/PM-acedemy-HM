import { createSelector } from "reselect";

const selector = createSelector(
    state => state.education || [{
        name: '',
        speciality: '',
        dateStart: '',
        dateEnd: '',
    }],
    state => state.name,
    (education, name) => ({
        education,
        name
    })
)

export default selector;
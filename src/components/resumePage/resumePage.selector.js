import { createSelector } from "reselect";

const selector = createSelector(
    state => state,
    (state) => ({state})
    // state => state.name,
    // state => state.surname,
    // state => state.positionName,
    // state => state.phoneNumber,
    // state => state.email,
    // state => state.education,
    // state => state.work,
    // (name, surname, positionName, phoneNumber, email, education, work) => ({
    //     name,
    //     surname,
    //     positionName,
    //     phoneNumber,
    //     email,
    //     education,
    //     work,
    // })
)

export default selector;
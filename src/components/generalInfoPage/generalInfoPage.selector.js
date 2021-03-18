import { createSelector } from "reselect";

const selector = createSelector(
    state => state.name || '',
    state => state.surname || '',
    state => state.positionName || '',
    state => state.phoneNumber || '',
    state => state.email || '',
    (name, surname, positionName, phoneNumber, email) => ({
        name,
        surname,
        positionName,
        phoneNumber,
        email,
    })
)

export default selector;
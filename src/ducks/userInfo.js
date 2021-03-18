const UPDATE_GENERAL_INFO = 'user_info/update_general_info';
const UPDATE_EDUCATION_INFO = 'user_info/update_education_info';
const UPDATE_WORK_INFO = 'user_info/update_work_info';

const updateGeneralInfo = (data) => ({
    type: UPDATE_GENERAL_INFO,
    payload: data,
});

const updateEducationInfo = (data) => ({
    type: UPDATE_EDUCATION_INFO,
    payload: data,
});

const updateWorkInfo = (data) => ({
    type: UPDATE_WORK_INFO,
    payload: data,
});

export const updateGeneralInfoHandler = (data) => (dispatch) => {
    dispatch(updateGeneralInfo(data));
};

export const updateEducationInfoHandler = (data) => (dispatch) => {
    dispatch(updateEducationInfo(data));
};

export const updateWorkInfoHandler = (data) => (dispatch) => {
    dispatch(updateWorkInfo(data));
};

const initialState = {
    name: '',
    surname: '',
    positionName: '',
    phoneNumber: '',
    email: '',
    education: [],
    work: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_GENERAL_INFO:
            return {
                ...state,
                name: action.payload.name,
                surname: action.payload.surname,
                positionName: action.payload.positionName,
                phoneNumber: action.payload.phoneNumber,
                email: action.payload.email,
            }
        case UPDATE_EDUCATION_INFO:
            return {
                ...state,
                education: [...action.payload],
            }
        case UPDATE_WORK_INFO:
            return {
                ...state,
                work: [...action.payload],
            }
        default:
            return state
    }
}

export default reducer;
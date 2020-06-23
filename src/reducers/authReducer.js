import * as actions from "../actions/types";

const initialState = {
    error: null,
    loading: false,
    verifyEmail: {
        error: null,
        loading: false
    }
};

export default(state = initialState, {type, payload}) => {
    switch (type) {
        case actions.CLEAN_UP:
            return {
                ...state,
                error: null,
                loading: false,
                verifyEmail: {
                    ...state.verifyEmail,
                    error: null,
                    loading: false
                }
            };
        case actions.AUTH_START:
            return {
                ...state,
                loading: true
            };
        case actions.AUTH_SUCCESS:
            return {
                ...state,
                error: false
            };
        case actions.AUTH_ERROR:
            return {
                ...state,
                error: payload
            };
        case actions.AUTH_END:
            return {
                ...state,
                loading: false
            };

        case actions.VERIFY_START:
            return {
                ...state,
                verifyEmail: {
                    ...state.verifyEmail,
                    loading: true
                }
            };
        case actions.VERIFY_SUCCESS:
            return {
                ...state,
                verifyEmail: {
                    ...state.verifyEmail,
                    loading: false,
                    error: false
                }
            };
        case actions.VERIFY_ERROR:
            return {
                ...state,
                verifyEmail: {
                    ...state.verifyEmail,
                    loading: false,
                    error: payload
                }
            };
        case actions.VERIFY_END:
            return {
                ...state,
                verifyEmail: {
                    ...state.verifyEmail,
                    loading: false,
                    error: false
                }
            };
        default:
            return state;
    }
};

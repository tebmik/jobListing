import * as actions from "../actions/types";

const initialState = {
    error: null,
    loading: false,
    verifyEmail: {
        error: null,
        loading: false
    },
    recoverPassword: {
        error: null,
        loading: false
    },
    updateProfile: {
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
                },
                recoverPassword: {
                    ...state.recoverPassword,
                    error: null,
                    loading: false
                },
                updateProfile: {
                    ...state.updateProfile,
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
        case actions.RECOVER_START:
            return {
                ...state,
                recoverPassword: {
                    ...state.recoverPassword, 
                    loading: true
                }
            }
        case actions.RECOVER_SUCCESS:
            return {
                ...state, 
                recoverPassword: {
                    ...state.recoveryPassword,
                    loading: false,
                    error: false
                }
            }
        case actions.RECOVER_ERROR:
            return {
                ...state,
                recoverPassword: {
                    ...state.recoverPassword,
                    loading: false,
                    error: payload
                }
            }
        case actions.RECOVER_END:
            return {
                ...state,
                recoverPassword: {
                    ...state.recoverPassword,
                    loading: false,
                    error: null
                }
            };
        case actions.PROFILE_UPDATE_START:
            return {
                ...state, 
                updateProfile: {
                    ...state.updateProfile,
                    loading: true,
                    error: null
                }
            };
        case actions.PROFILE_UPDATE_SUCCESS:
            return {
                ...state,
                updateProfile: {
                    ...state.updateProfile,
                    loading: false,
                    error: false
                }
            };
        case actions.PROFILE_UPDATE_ERROR:
            return {
                ...state,
                updateProfile: {
                    ...state.updateProfile,
                    loading: false,
                    error: payload
                }
            };
        case actions.PROFILE_UPDATE_END:
            return {
                ...state,
                updateProfile: {
                    ...state.updateProfile,
                    loading: false,
                    error: false
                }
            };
        default:
            return state;
    }
};

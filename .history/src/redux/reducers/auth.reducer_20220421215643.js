import {
    LOGIN_FAIL,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOAD_PROFILE
} from '../actionType'
const initialState = {
    user:null,
    loading:false,
    accessToken:null,
}
export const authReducer = (prevState = initialState, action) => {
    const { type, payload } = action
 
    switch (action.type) {
       case LOGIN_REQUEST:
          return  {
            ...prevState,
            loading: true,
             
          };
 
       case LOGIN_SUCCESS:
          return {
            ...prevState,
            accessToken: payload,
            loading: true,
          };
       case LOGIN_FAIL:
          return {
            ...prevState,
            accessToken: null,
            loading: false,
            error: payload,
          };
       case LOAD_PROFILE:
          return {
            ...prevState,
            user: payload,
          }
 ;
    //    case LOG_OUT:
    //       return {
    //          ...prevState,
    //          accessToken: null,
    //          user: null,
    //       }
       default:
          return prevState;
    }
 }
import {
    LOGIN_FAIL,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOAD_PROFILE
} from '../actionType'
const initialState = {
    accessToken: null,
    user: null,
    loading: false,
}
export const authReducer = (prevState = initialState, action) => {
    const { type, payload } = action
 
    switch (type) {
       case LOGIN_REQUEST:
          return [
            ...prevState,
              {
             
             loading: true,
          }];
 
       case LOGIN_SUCCESS:
          return [
            ...prevState,{
             
             accessToken: payload,
             loading: false,
          }];
       case LOGIN_FAIL:
          return [
            ...prevState,{
             
             accessToken: null,
             loading: false,
             error: payload,
          }];
       case LOAD_PROFILE:
          return [
            ...prevState,{
             
             user: payload,
          }
 ];
    //    case LOG_OUT:
    //       return {
    //          ...prevState,
    //          accessToken: null,
    //          user: null,
    //       }
       default:
          return prevState
    }
 }
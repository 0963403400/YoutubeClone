import {
    LOGIN_FAIL,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOAD_PROFILE
} from '../actionType'
const initialState = {
    tuan:null,
    hai:null,
    nguyen:null
}
export const authReducer = (prevState = initialState, action) => {
   //  const { type, payload } = action
 
    switch (action.type) {
       case LOGIN_REQUEST:
          return  {
            ...prevState,
             
             
             loading: true,
          };
 
       case LOGIN_SUCCESS:
          return {
            ...prevState,
            
             
             accessToken: 'TUan dep zai',
             loading: false,
          };
       case LOGIN_FAIL:
          return {
            ...prevState,
             
             accessToken: null,
             loading: false,
             error: action.payload,
          };
       case LOAD_PROFILE:
          return {
            ...prevState,
            accessToken: 'TUan dep zai',
             user: 'action.payload',
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
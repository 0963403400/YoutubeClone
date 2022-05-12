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
   //  const { type, payload } = action
 
    switch (action.type) {
       case LOGIN_REQUEST:
          return  {
            ...prevState,
             
          };
 
       case LOGIN_SUCCESS:
          return {
            ...prevState,
             hai: 'TUan dep zai',
             tuan: false,
          };
       case LOGIN_FAIL:
          return {
            ...prevState,
             hai: null,
            //  loading: false,
            //  error: action.payload,
          };
       case LOAD_PROFILE:
          return {
            ...prevState,
            hai: action.payload,
             tuan: action.payload,
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
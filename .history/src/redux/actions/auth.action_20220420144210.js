import firebase from "firebase/compat/app"
import auth from '../../firebase'
import { LOGIN_REQUEST } from "../actionType"

export const login = () => async dispatch => {
    try{
        dispatch({
            type:LOGIN_REQUEST
        })
        const provider= new firebase.auth.GoogleAuthProvider()
        const res= await auth.signInWithPopup(provider)
        console.log(res)
    }
    catch(error)
    {

    }
}
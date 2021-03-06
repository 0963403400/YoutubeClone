import firebase from "firebase/compat/app"
import auth from '../../firebase'
import { LOAD_PROFILE, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS } from "../actionType"

export const login = () => async dispatch => {
    // const dispatch = useDispatch();
    try {
        dispatch({
            type: LOGIN_REQUEST
        })
        const provider = new firebase.auth.GoogleAuthProvider()
        const res = await auth.signInWithPopup(provider)
        console.log(res)

        const accessToken = res.credential.accessToken
        const profile = {
            // accessToken: accessToken,
            name: res.additionalUserInfo.profile.name,
            photoURL: res.additionalUserInfo.profile.picture,
        }
        window.sessionStorage.setItem('Tuan-accessToken',accessToken)
        window.sessionStorage.setItem('Tuan-User',JSON.stringify(profile))
        dispatch({

            type: LOGIN_SUCCESS,
            payload: accessToken,

        })

        dispatch({
            type: LOAD_PROFILE,
            payload: profile,

        })

    }
    catch (error) {
        console.log(error.message)
        dispatch({
            type: LOGIN_FAIL,
            payload: error.message,
        })
    }
}
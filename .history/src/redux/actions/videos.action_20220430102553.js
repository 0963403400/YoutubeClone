import request from "../../api"
import { HOME_VIDEOS_REQUEST, HOME_VIDEOS_SUCCESS } from "../actionType"

export const getPopularVideos = () => async dispatch => {
    try {
        dispatch({
            type: HOME_VIDEOS_REQUEST,

        })
        const res= await request('/videos?',{
            params:{
                key:"AIzaSyD-tqWEQ4pVedEnkKv5bWAtSWL1dxa_tKI",
                part:"snippet,contentDetails,statistics",
                chart:"mostPopular",
                regionCode:"VN",
                maxResults:20,
                pageToken:'',
                
            }, 
        })
        console.log(res);

    } catch (error) { console.log(error.message)
        // dispatch({
        //    type: HOME_VIDEOS_FAIL,
        //    payload: error.message,
        // })
    }
}
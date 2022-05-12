import request from "../../api"
import { HOME_VIDEOS_REQUEST, HOME_VIDEOS_SUCCESS } from "../actionType"
export default getPopularVideos = () => async dispatch => {
    try {
        dispatch({
            type: HOME_VIDEOS_REQUEST,

        })
        const res= request('/videos',{
            params:{
                part:"snippet,contentDetails,statistics",
                chart:"mostPopular",
                regionCode:"VN",
                maxResults:20,
                pageToken:''
            }, 
        })
        console.log(res)

    } catch (error) { }
}
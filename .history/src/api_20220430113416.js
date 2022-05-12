import axios from "axios";

const request=axios.create({
    baseURL:"https://youtube.googleapis.com/youtube/v3"
    params:{
        key:"AIzaSyD-tqWEQ4pVedEnkKv5bWAtSWL1dxa_tKI",
    },
})

export default request;


export const fetchVideos = url => {
    return (dispatch) => {

        fetch(url)
            .then(response => response.json())
            .then(res => {
                console.log("YouTube", res.data);
                dispatch(fetchVideosSuccess(res));
            })
            .catch(error => {
                console.log('Request failed', error);
            });
    }
};

const fetchVideosSuccess = videos => ({type: "FETCH_VIDEOS_SUCCESS", payload: videos});
export const createFrame = videoId => ({type: "CREATE_FRAME", payload: videoId});


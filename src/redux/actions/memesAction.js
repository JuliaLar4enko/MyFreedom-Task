const apiUrlGet = 'https://api.imgflip.com/get_memes';

export const fetchMemes = memesCount => {
    return (dispatch) => {

        fetch(apiUrlGet)
            .then(response => response.json())
            .then(res => {
                return res.data.memes.filter((meme, i) => i < memesCount);
            })
            .then(res => {
                dispatch(fetchCertainMemes(res));
            })
            .catch(error => {
                console.log('Request failed', error);
            });
    }
};

const urlPostMeme = 'https://api.imgflip.com/caption_image';

export const fetchGeneratedMeme = requestDate => {
    return (dispatch) => {
        fetch(urlPostMeme, {
            method: 'POST',
            headers: {'Content-Type':'application/x-www-form-urlencoded'},
             body: requestDate
            })
            .then(res => res.json())
            .then(res => {
                dispatch(fetchGeneratedMemeSuccess(res.data));
            })
            .catch(error => {
                console.log('Request failed', error);
            });
    }
};


const fetchCertainMemes = memes => ({type: "FETCH_CERTAIN_MEMES", payload: memes});
const fetchGeneratedMemeSuccess = generatedMeme => ({type: "FETCH_GENERATED_MEME_SUCCESS", payload: generatedMeme});


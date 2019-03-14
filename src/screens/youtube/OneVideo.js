import React from 'react';
import { connect } from 'react-redux';


class OneVideo extends React.Component {

    handleReturn = () => {
        this.props.history.push('/youtube');
    };


    render() {
        const { videos, id } = this.props;

        let currentVideo = videos.filter(video => video.id.videoId === id);

        if (currentVideo.length === 0) {
            this.props.history.push('/youtube');
            return <div> </div>
        }

        let url = "https://www.youtube.com/embed/" + currentVideo[0].id.videoId;

        return (
            <div>
                <iframe src={url} style={{width:'600px',height:'300px', display: 'block'}}> </iframe>
                <button onClick={this.handleReturn} style={{margin:'20px 10px'}} className="btn btn-md btn-danger">
                    Return to the list
                </button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        videos: state.youtube.videos,
        id: state.youtube.id
    }
};
export default connect(mapStateToProps)(OneVideo);
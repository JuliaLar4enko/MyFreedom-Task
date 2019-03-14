import React from 'react';
import { connect } from 'react-redux';

import { createFrame } from '../../redux/actions/index';
import {Link} from "react-router-dom";


class FiveVideosYouTube extends React.Component {

    handleSelectVideo  = (id) =>{
        this.props.createFrame(id);
    };


    render() {
        const { videos } = this.props;

        return (
            <div>
                {videos.map(video => {
                    let id = video.id.videoId;
                    return (
                        <span key={id} className="mb-3">
                             <Link to={`/video/${id}`}>
                                    <img src={video.snippet.thumbnails.default.url} style={{width:'200px'}}
                                         onClick={() => this.handleSelectVideo(id)}/>
                             </Link>
                         </span>
                    )
                })
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        videos: state.youtube.videos
    }
};
export default connect(mapStateToProps, {createFrame})(FiveVideosYouTube);

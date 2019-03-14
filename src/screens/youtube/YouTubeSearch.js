import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchVideos } from '../../redux/actions/index';
import  SelectedVideo from '../../components/youTube/FiveVideosYouTube';


class YouTubeSearch extends Component {
    state = {
        videoWord: ''
    };

    handleChange = (e)=>{
        const {name, value} = e.target;
        this.setState({[name]:value});
    };

    handleSubmit = (e)=>{
        e.preventDefault();

        const {videoWord} = this.state;
        let url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyBrmaj7j0yIJGWcGPYH3THz_Rh8BYAtlQs&q=' + encodeURIComponent(videoWord) + '&type=video';

        this.props.fetchVideos(url);
        this.setState({videoWord:''});
    };


    render() {
        const { videoWord } = this.state;

        return (
            <div className="container">
                <h2>Поиск по youtube</h2>
                <form className="form-inline mb-3" onSubmit={this.handleSubmit}>
                    <input name="videoWord" className="form-control mr-2" value={videoWord} onChange={this.handleChange}/>
                    <button type="submit" className="btn btn-success">Получить</button>
                </form>
                <SelectedVideo />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        videos: state.youtube.videos
    }
};

export default connect(mapStateToProps, { fetchVideos })(YouTubeSearch);
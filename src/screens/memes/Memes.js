import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchMemes } from '../../redux/actions/index';
import  MemesPictures from '../../components/memes/MemesArr';


class Memes extends Component {
    state = {
        count: ''
    };

    handleChange = (e)=>{
        const {name, value} = e.target;
        this.setState({[name]:value});
    };

    handleSubmit = (e)=>{
        e.preventDefault();

        const {count} = this.state;
        const memesCount = +count;

        this.props.fetchMemes(memesCount);

        this.setState({count:''});
    };


    render() {
        const { memes } = this.props;
        const { count } = this.state;

        const currentMemes = memes.length !==  0;

        return (
            <div className="container">
                <h2>Генератор мемов</h2>
                <form className="form-inline mb-3" onSubmit={this.handleSubmit}>
                    <button type="submit" className="btn btn-dark">Получить</button>
                    <input name="count" className="form-control mr-2" value={count} onChange={this.handleChange}/>
                    мемов
                </form>
                {currentMemes ? (<MemesPictures />) : (<div>There is no memes...</div>)}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        memes: state.memes.memes
    }
};

export default connect(mapStateToProps, { fetchMemes })(Memes);
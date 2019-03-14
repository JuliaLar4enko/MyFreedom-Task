import React from 'react';
import { connect } from 'react-redux';
import qs from 'query-string';

import { fetchGeneratedMeme } from '../../redux/actions/index';
import  GeneratedMeme from './GeneratedMeme';



class MemesArr extends React.Component {

    state = {
        id: '',
        text0: '',
        text1: ''
    };

    handlePictureValue = (id)=>{
        this.setState({
            id: id
        });
    };


    handleChange = (e)=>{
        const {name, value} = e.target;
        this.setState({[name]:value});
    };

    handleSubmit = (e)=>{
        e.preventDefault();
        const {id, text0, text1} = this.state;

        const generatedMeme = {
            template_id: id,
            username: "g_user_107257642549096835361",
            password: '1234',
            text0: text0,
            text1: text1
        };

        const requestDate = qs.stringify(generatedMeme);

        this.props.fetchGeneratedMeme(requestDate);

        this.setState({id:'', text0:'', text1:''});
    };


    render() {
        const { memes, generated } = this.props;
        const { text0, text1 } = this.state;

        const generatedMeme = generated !==  '';

        return (
            <div className="container">
                <div>
                    {memes.map(meme => {
                        return (
                            <span key={meme.id} className="mb-3">
                                <img src={meme.url} style={{width:'150px'}} onClick={() => this.handlePictureValue(meme.id)} className='hover-img'/>
                            </span>
                        )
                    })}
                </div>
                <form className="form-inline mb-3" onSubmit={this.handleSubmit}>
                    <input name="text0" className="form-control mr-2" value={text0} onChange={this.handleChange}/>
                    <input name="text1" className="form-control mr-2" value={text1} onChange={this.handleChange}/>
                    <button type="submit" className="btn btn-dark">Сгенерировать</button>
                </form>
                {generatedMeme ? (<GeneratedMeme />) : (<div>There is no words for your meme...</div>)}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        memes: state.memes.memes,
        generated: state.memes.generated.url
    }
};
export default connect(mapStateToProps, {fetchGeneratedMeme})(MemesArr);
import React from 'react';
import { connect } from 'react-redux';


class GeneratedMeme extends React.Component {

    render() {
        const { generated } = this.props;
        console.log('generated', generated);

        return (
            <div className="container">
                <img src={generated} style={{width:'350px'}}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        generated: state.memes.generated.url
    }
};
export default connect(mapStateToProps)(GeneratedMeme);
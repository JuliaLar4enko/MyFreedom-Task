import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchExchange } from '../../redux/actions/index';


class ExchangeRate extends Component {

    componentDidMount() {
        this.props.fetchExchange();
    }

    render() {
        const { currency } = this.props;

        return (
            <div className="currency currentExchange">
                {currency.Cur_Scale}$ = {Math.round(currency.Cur_OfficialRate*100)/100} руб
            </div>

        );
    }
}

const mapStateToProps = state => {
    return {
        currency: state.pets.currency
    }
};

export default connect(mapStateToProps, { fetchExchange })(ExchangeRate);
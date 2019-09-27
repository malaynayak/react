import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from '../../containers/Checkout/ContactData/ContactData';

class Checkout extends Component {
    
    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    checkoutCancelledHandeler = () => {
        this.props.history.goBack();
    }

    render() {
        return (
            <div>
                <CheckoutSummary
                    checkoutContinued={this.checkoutContinuedHandler}
                    checkoutCancelled={this.checkoutCancelledHandeler}
                    ingredients={this.props.ingredients} />
                <Route 
                    path={this.props.match.path + '/contact-data' }
                    component={ContactData}
                    />
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        ingredients: state.ingredients,
    }
};

export default connect(mapStateToProps, null)(Checkout);
import React, {Component} from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from '../../containers/Checkout/ContactData/ContactData';
import * as actions from '../../store/actions/index';

class Checkout extends Component {

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    checkoutCancelledHandeler = () => {
        this.props.history.goBack();
    }

    render() {
        let summary = <Redirect to="/" />;
        
        if (this.props.ingredients) {
            const purchasedRedirect = this.props.purchased ? <Redirect to="/" />: null;
            summary = (
                <div>
                    { purchasedRedirect }
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
        return summary;
    }
};

const mapStateToProps = state => {
    return {
        ingredients: state.burgerBuilder.ingredients,
        purchased: state.order.purchased
    }
};

export default connect(mapStateToProps)(Checkout);
import React, {Component} from 'react';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner'
import classes from './ContactData.module.css';
import axios  from '../../../axios-order';

class ContactData extends Component {
    
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandeler = (event) => {
        event.preventDefault();
        this.setState({loading: true});
        const order = {
            ingredients : this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'John Doe',
                address: {
                    street: 'Test Street',
                    zipCode: '123456',
                    country: 'US'
                },
                email: 'jdoe@test.com'
            },
            deliveryMethod: 'standard'
        };
        axios.post('/orders.json', order)
            .then(response => {
                console.log(response);
                this.setState({
                    loading: false
                });
                this.props.history.push('/');
            })
            .catch(error => {
                console.log(error);
                this.setState({
                    loading: false
                });
            });
    }

    render() {
        let form  = (
            <form>
                <input type="text" className={classes.Input} name="name" placeholder="Your Name" />
                <input type="email" className={classes.Input} name="email" placeholder="Your Email" />
                <input type="text" className={classes.Input} name="street" placeholder="Street" />
                <input type="text" className={classes.Input} name="postal" placeholder="Postal Code" />
                <Button
                    clicked={this.orderHandeler} 
                    btnType="Success">ORDER</Button>
            </form>
        );
        if (this.state.loading) {
            form = <Spinner />;
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter You Contact Data</h4>
                {form}
            </div>
        );
    }
};

export default ContactData;
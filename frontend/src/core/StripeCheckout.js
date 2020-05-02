import React , {useState , useEffect}from 'react';
import {isAutheticated} from '../auth/helper';
import {cartEmpty , loadCart } from './helper/cartHelper';
import {Link} from 'react-router-dom';

const StripeCheckout = () => {
    return (
        <div>
            <h3 className="text-white">Stripe checkout Loaded !</h3>
        </div>
    );
}

export default StripeCheckout;
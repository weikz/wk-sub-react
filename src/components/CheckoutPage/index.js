import React from 'react';
import Helmet from 'react-helmet';

import Payment from './Payment';


const CheckoutPage = () => (
    <div>
       <Helmet 
            title="WK 訂閱制 DEMO"
       />
       <p>This is Checkout Page</p>
       <Payment/>
    </div>
)

export default CheckoutPage;
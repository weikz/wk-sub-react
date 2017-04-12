import React from 'react';
import Helmet from 'react-helmet';

import Title from './Title';
import Payment from './Payment';


const CheckoutPage = () => (
    <div>
       <Helmet 
            title="WK訂閱制 - 結帳DEMO"
       />
       <Title />
       <Payment />
    </div>
)

export default CheckoutPage;
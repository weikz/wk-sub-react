import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';

import { Button } from 'react-bootstrap';
import Title from './Title';
import Payment from './Payment';


const CheckoutPage = () => (
    <div>
       <Helmet 
            title="WK訂閱制DEMO - 結帳"
       />
       <Button bsStyle="primary" href="/login">訂閱制客戶登入</Button>
       <Title />
       <Payment />
    </div>
)

export default CheckoutPage;
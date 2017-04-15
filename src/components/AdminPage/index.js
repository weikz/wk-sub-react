import React from 'React';
import Helmet from 'react-helmet';

import Navigation from './Navigation';
import OrderPanel from './OrderPanel';

const AdminPage = () => (
    <div>
        <Helmet title="後台管理"/>
        <Navigation />
        <OrderPanel />
    </div>
);

export default AdminPage;  
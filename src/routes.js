import App from './containers/Layout';
import CheckoutPage from './containers/CheckoutPage';
import LoginPage from './containers/LoginPage';
import AdminPage from './containers/AdminPage';
import OrderPage from './containers/OrderPage';

const routes = () => ({
  path: '/',
  component: App,
  indexRoute: {
    component: App
  },
  childRoutes: [{
    path: 'login',
    getComponent(nextState, cb) {
      require.ensure([], require => {
        cb(null, require('./containers/LoginPage').default);
      }, 'checkout');
    },
  }, {
    path: 'checkout',
    getComponent(nextState, cb) {
      require.ensure([], require => {
        cb(null, require('./containers/CheckoutPage').default);
      }, 'checkout');}
  }, {
    path: 'order',
    getComponent(nextState, cb) {
      require.ensure([], require => {
        cb(null, require('./containers/OrderPage').default);
      }, 'order');}
  }, {
    path: 'admin',
    getComponent(nextState, cb) {
      require.ensure([], require => {
        cb(null, require('./containers/AdminPage').default);
      }, 'admin');
  },
  }],
});

export default routes;
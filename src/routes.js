import App from './containers/Layout';
import AnotherPage from './containers/AnotherPage';
import CheckoutPage from './containers/CheckoutPage';

const routes = () => ({
  path: '/',
  component: App,
  indexRoute: {
    component: CheckoutPage
  },
  // childRoutes: [{
  //   path: 'checkout',
  //   getComponent(nextState, cb) {
  //     require.ensure([], require => {
  //       cb(null, require('./containers/CheckoutPage').default);
  //     }, 'checkout');
  //   },
  // }, {
  //   path: '*',
  //   getComponent(nextState, cb) {
  //     require.ensure([], require => {
  //       cb(null, require('./containers/NotFoundPage').default);
  //     }, 'notFound');
  //   },
  // }],
});

export default routes;
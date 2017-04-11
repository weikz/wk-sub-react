import App from './containers/Layout';

import AnotherPage from './containers/AnotherPage';

const routes = () => ({
  path: '/',
  component: App,
  indexRoute: {
    component: AnotherPage,
  },
  childRoutes: [{
    path: 'another',
    getComponent(nextState, cb) {
      require.ensure([], require => {
        cb(null, require('./containers/AnotherPage').default);
      }, 'another');
    },
  }, {
    path: '*',
    getComponent(nextState, cb) {
      require.ensure([], require => {
        cb(null, require('./containers/NotFoundPage').default);
      }, 'notFound');
    },
  }],
});

export default routes;
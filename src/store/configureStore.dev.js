import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'remote-redux-devtools';

import rootReducer from '../reducers';

const logger = createLogger({
    level: 'info',
    collapsed: true
});

const router = routerMiddleware(browserHistory);

const configureStore = preloadedState => {
    const store = createStore(
        rootReducer,
        preloadedState,
        composeWithDevTools(
            applyMiddleware(thunk, router, logger)
        )
    );

    return store;
};

export default configureStore
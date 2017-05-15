import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import injectTapEventPlugin from 'react-tap-event-plugin';

import rootReducer from './reducers/rootReducer';

import './styles/index.sass';

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk, logger)
    )
);
injectTapEventPlugin();

ReactDOM.render (
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,
    document.getElementById('app')
);

import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
const App = React.lazy(() => import('./app'));
import { Router } from '@reach/router'
import 'antd/lib/style/themes/default.less';

import 'antd/dist/antd.less';
import './theme/index.less';
import { createStore, applyMiddleware, compose } from 'redux';
import promise from 'redux-promise';
import { Provider } from 'react-redux';
import reducers from './store/reducer'

const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : compose;
const store = createStore(reducers, compose(applyMiddleware(promise), composeEnhancers))

ReactDOM.render(
    <main className='main-container'>
        <Provider store={store}>
            <Suspense fallback={<div><center><h1 style={{ margin: "500px 300px", textAlign: 'center' }}>Loading...</h1></center></div>}>
                <Router basepath="/">
                    <App path="/*" />
                </Router>
            </Suspense>
        </Provider>
    </main>,
    document.getElementById('root')
);
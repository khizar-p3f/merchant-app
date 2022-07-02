import React, { Suspense } from 'react';
const Dashboard = React.lazy(() => import('./dashboard/index'));
import { Router } from '@reach/router'

import { createStore, applyMiddleware, compose } from 'redux';
import promise from 'redux-promise';
import { Provider } from 'react-redux';
import reducers from './dashboard/store/reducer'
import Fallback from './fallback';

const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : compose;
const store = createStore(reducers, compose(applyMiddleware(promise), composeEnhancers))

const MainDashboard = () => {
    return (
        <main className='main-container'>
            <Suspense fallback={<Fallback/>}>
                <Provider store={store}>
                    <Router basepath="/">
                        <Dashboard path="/*" />
                    </Router>
                </Provider>
            </Suspense>
        </main>
    )
}
export default MainDashboard


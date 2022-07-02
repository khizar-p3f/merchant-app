import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Router } from '@reach/router'
import MainDashboard  from './maindashboard'
import LandingPageMain from './landing';



ReactDOM.render(
    <Router basepath="/">
        <MainDashboard path="/app/*" />
        <LandingPageMain path="/*" />
    </Router>,
    document.getElementById('root')
);
import {  Layout,   } from 'antd';
import React, { useState } from 'react';
import MainHeader from './components/mainheader';
import MainSidebar from './components/mainsidebar';
import { Router } from '@reach/router'
import IndexPage from './pages';
import AboutPage from './pages/about';

import './theme/app.less'
import { useDispatch, useSelector } from 'react-redux';
import UsersList from './pages/users';
import PageBuilder from './pages/builder';


const App = () => {
    const [collapsed, setCollapsed] = useState(false);
    const dispatch = useDispatch()
    const store =useSelector((state) => state.user)

    return (
        <Layout id='main-layout'>
            <MainHeader collapsed={collapsed} setCollapsed={setCollapsed} />
            <Layout id='main-layout'>
                <MainSidebar collapsed={collapsed} />
                <Layout className="site-layout">
                    <Router basepath="/">
                        <UsersList path="/" />
                        <UsersList path="/home"  />
                        <UsersList path="/users"  />
                        <AboutPage path="/about-us" />
                        <PageBuilder path="/builder" />
                    </Router>                   
                </Layout>
            </Layout>
        </Layout>
    );
};

export default App
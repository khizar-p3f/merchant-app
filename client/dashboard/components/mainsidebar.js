import { Layout, Menu } from 'antd'
import React, { useState } from 'react';
import { VideoCameraOutlined, UserOutlined,UploadOutlined } from '@ant-design/icons';


const { Sider } = Layout;
const MainSidebar = (props) => {
    
    return (
        <Sider theme='dark' id='main-sidebar' breakpoint="sm" collapsedWidth="110" width={250}  trigger={null} collapsible collapsed={props.collapsed}>
        <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={[
                {
                    key: '1',
                    icon: <UserOutlined />,
                    label: 'nav 1',
                },
                {
                    key: '2',
                    icon: <VideoCameraOutlined />,
                    label: 'nav 2',
                },
                {
                    key: '3',
                    icon: <UploadOutlined />,
                    label: 'nav 3',
                },
            ]}
        />
    </Sider>
    )
}

export default MainSidebar
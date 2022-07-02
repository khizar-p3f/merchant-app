import React, { useState } from 'react'
import { Col, Layout, Row, Button, Checkbox, Form, Input, Space } from 'antd';
const { Content, Footer } = Layout;

import '../theme/index.less'
import img2 from '../assets/images/svg8.svg'
import LandingPageHeader from '../component/header';
import SimpleLineIcon from 'react-simple-line-icons';

const LandingSignupPage = () => {
    const initialState = {
        page: 0
    }
    const [state, setState] = useState({
        ...initialState
    })
    return (
        <Layout className="layout">
            <LandingPageHeader />
            <section className='signup'>
                <Content >
                    <div className='container'>
                        <Row align='middle' gutter={[16,16]}>
                            <Col span={12}>
                                <img src={img2} height={500} />
                            </Col>
                            <Col span={12}>
                                <div className='form-box'>
                                    {
                                        state.page == 0 &&
                                        <section>
                                            <h1>Sigin in</h1>
                                            <h2>Welcome Back</h2>
                                            <p>Here's my recent exploration. What do you think? Give your opinion in the comments below!</p>
                                            <Row gutter={[16,16]}>
                                                <Col span={24}>
                                                    <Form name="basic" layout="vertical"
                                                        initialValues={{ remember: true,}} autoComplete="off">
                                                        <Form.Item
                                                            label="Username"
                                                            name="username"
                                                            rules={[
                                                                {
                                                                    required: true,
                                                                    message: 'Please input your username!',
                                                                },
                                                            ]}
                                                        >
                                                            <Input />
                                                        </Form.Item>
                                                        <Form.Item
                                                            label="Password"
                                                            name="password"
                                                            rules={[
                                                                {
                                                                    required: true,
                                                                    message: 'Please input your password!',
                                                                },
                                                            ]}
                                                        >
                                                            <Input.Password />
                                                        </Form.Item>
                                                        <Form.Item
                                                            name="remember"
                                                            valuePropName="checked"
                                                            wrapperCol={{
                                                                offset: 8,
                                                                span: 16,
                                                            }}
                                                        >
                                                            <Checkbox>Remember me</Checkbox>
                                                        </Form.Item>
                                                        <Form.Item
                                                            wrapperCol={{
                                                                offset: 8,
                                                                span: 16,
                                                            }}
                                                        >
                                                           <Space>
                                                           <Button type="primary" htmlType="submit" size='large'>Login</Button>
                                                            <Button type="dashed" htmlType="reset" size='large'>Reset</Button>
                                                           </Space>
                                                        </Form.Item>
                                                    </Form>
                                                </Col>
                                                <Col span={12}>                                                   
                                                    <Button color='red'  type="primary" size='large' block><SimpleLineIcon name="social-facebook" /> facebook </Button>
                                                </Col>
                                                <Col span={12}>
                                                    <Button  type="primary" size='large' block><SimpleLineIcon name="social-twitter" /> twitter </Button>
                                                </Col>
                                                <Col span={12}>                                                   
                                                    <Button color='red'  type="primary" size='large' block><SimpleLineIcon name="social-instagram" /> instagram </Button>
                                                </Col>
                                                <Col span={12}>
                                                    <Button  type="primary" size='large' block><SimpleLineIcon name="social-linkedin" /> linkedin </Button>
                                                </Col>
                                            </Row>
                                        </section>
                                    }
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Content>
            </section>
            <Footer
                style={{
                    textAlign: 'center',
                }}
            >
                P3Fusion LLC 2022
            </Footer>
        </Layout>
    )
}

export default LandingSignupPage
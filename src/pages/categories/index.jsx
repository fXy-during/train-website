import React from "react";

import Nav from "@/components/home/Nav0";
import { enquireScreen } from 'enquire-js';
import { Row, Col } from "antd";
import Footer from "@/components/home/Footer1";

import {
    Nav00DataSource,
    Footer10DataSource,
} from '@/components/home/data.source';

import { List } from 'antd';
import SideBar from "@/components/side-bar"

const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
];


let isMobile;
enquireScreen((b) => {
    isMobile = b;
});

export default class Categories extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isMobile
        }
    }

    componentDidMount() {
        enquireScreen((b) => {
            this.setState({ isMobile: !!b });
        });
    }

    render() {
        const { isMobile } = this.state;
        const { articleId, selectedKey = ["1"] } = this.props;
        return (<div>
            <Nav
                id="Nav0_0"
                key="Nav0_0"
                dataSource={Nav00DataSource}
                isMobile={isMobile}
                selectedKey={selectedKey}
            />

            <div className="home-page-wrapper ">
                <div className="home-page content0 categories-content">
                    <Row gutter={16}>
                        <Col span={18} md={18} xs={24}>
                            <List
                                size="large"
                                header={<div>Header</div>}
                                footer={<div>Footer</div>}
                                bordered
                                dataSource={data}
                                renderItem={item => (<List.Item>{item}</List.Item>)}
                            />
                        </Col>
                        <Col span={6} md={6} xs={24}>
                            <div className="cate-side">
                                <ul>
                                    <li>政策文件</li>
                                    <li>考试动态</li>
                                    <li>历年真题</li>
                                    <li>联系我们</li>
                                    <li>机构优势</li>
                                    <li>课程介绍</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>

            <Footer
                id="Footer1_0"
                key="Footer1_0"
                dataSource={Footer10DataSource}
                isMobile={isMobile}
            />
        </div>)
    }
}
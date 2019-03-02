import React from "react";
import { enquireScreen } from 'enquire-js';
import { Col, Row } from "antd"
import Nav from "@/components/home/Nav0";
import SideBar from "@/components/side-bar"

import Footer from "@/components/home/Footer1";

import {
    Nav00DataSource,
    Footer10DataSource,
} from '@/components/home/data.source';

import ArticleMap from "../../artcleMap";

let isMobile;
enquireScreen((b) => {
    isMobile = b;
});

export default class Aritcle extends React.PureComponent {
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
        const { articleId, selectedKey=[] } = this.props;
        const { title, content } = ArticleMap[articleId || 1];

        return (
            <div className="">
                <Nav
                    id="Nav0_0"
                    key="Nav0_0"
                    dataSource={Nav00DataSource}
                    isMobile={isMobile}
                    selectedKey={selectedKey}
                />
                <div className="home-page-wrapper content0-wrapper article-wrapper" style={{ height: "auto" }}>
                    <div className="home-page content0">
                        <Row gutter={16}>
                            <Col span={18} md={18} xs={24}>
                                <section className="article-title">
                                    {title}
                                </section>
                                <section className="article-content">
                                    {content.map( (item, index) => <p key={index}> {item} </p>)}
                                </section>
                            </Col>
                            <Col span={6} md={6} xs={24}>
                                <SideBar />
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
            </div>
        )
    }
}
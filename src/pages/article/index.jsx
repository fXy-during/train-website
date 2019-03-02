import React from "react";
import { enquireScreen } from 'enquire-js';
import { Col, Row } from "antd"
import Nav from "@/components/home/Nav0";
import SideBar from "@/components/side-bar"

import {
    Nav00DataSource,
} from '@/components/home/data.source';


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

        return (
            <div>
                <Nav
                    id="Nav0_0"
                    key="Nav0_0"
                    dataSource={Nav00DataSource}
                    isMobile={isMobile}
                    selectedKey={["1"]}
                />
                <div className="home-page-wrapper content0-wrapper" style={{ height: "auto" }}>
                    <div className="home-page content0">
                        <Row gutter={16}>

                            <Col span={18}>

                               <section className="article-title">
                    this is title.
                                   </section>
                                   <section className="article-content">
            <p>this is content.</p>
            <p>
            使用 Ramda 时，应该感觉像使用原生 JavaScript 一样，它是实用且函数式的 JavaScript。Ramda 没有在字符串中引入 lambda 表达式，也没有借用 consed 列表，更不是要移植所有的 Clojure 函数。

Ramda 基本的数据结构都是原生 JavaScript 对象，我们常用的集合是 JavaScript 的数组。Ramda 还保留了许多其他原生 JavaScript 特性，例如，函数是具有属性的对象。

函数式编程优势主要体现在数据不变性和函数无副作用两方面。虽然 Ramda 没有对此特别加强，但它在这两方面支持的非常好。

我们尽量让实现（编程和 API 实现）简洁、优雅。但 API 为王。为此我们牺牲了大量优雅、简洁的实现。

最后，Ramda 非常注重运行性能。可靠和快速的实现胜过过于强调函数式的纯度。
</p>

                                       </section>
                    </Col>

                            <Col span={6}>
                                <SideBar/>
                    </Col>
                        </Row>


                    </div>

                </div>
            </div>
        )
    }
}
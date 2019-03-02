import React from "react";
import Aritcle from "./index";

export default class About extends React.PureComponent {
    render() {
        return (
            <Aritcle articleId="1" selectedKey={["2"]} />
        )
    }
}
import React, { Component } from "react";
import StarRate from "./StarRate";
import "./styles.css"
const dataTabView = [
    {
        title: "Description",
        content: <StarRate numberStar="1" />

    }
]
export default class extends Component {
    constructor() {
        super();
        this.state = {
            tabActive: 0
        }
    }
    render() {
        return (
            <div className="tab-view">
                <div className="nav-tab">
                    <ul>
                        {
                            this.props.dataTabView.map((item, index) => {
                                return <li onClick={() => {
                                    this.setState({
                                        tabActive: index
                                    })
                                }}>{item.title}</li>
                            })
                        }
                    </ul>
                </div>
                <div className="nav-tab-panel">
                    {
                        this.props.dataTabView.map((item, index) => {
                            return <div className={"tab-content tab-description" + String(index === this.state.tabActive ? " tab-active" : "")}>
                                {item.content}
                            </div>
                        })
                    }
                </div>
            </div>
        );
    }
}
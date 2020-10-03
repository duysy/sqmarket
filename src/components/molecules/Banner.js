import React, { Component } from "react";
import "./styles.css"
export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
    componentDidMount() {
        setInterval(() => {
             this.setState({
                count: this.state.count + 1
            });
            if (this.state.count >= this.props.dataImage.length) {
                this.setState({
                    count: 0
                });
            }
        }, this.props.timeChange);
    }
    componentWillUnmount() {
        clearInterval();
    }
    render() {
        return (
            <div className="banner-image-container">
                <img src={this.props.dataImage[this.state.count]} alt="" width="100%" height="100%"/>
                <div className="banner-circle-button">
                    {this.props.dataImage.map((value, index) => {
                        return <input type="button"
                            className={this.state.count===index ? "banner-circle-button--bgred":""}
                            onClick={() => {
                                this.setState({
                                    count: index
                                });
                            }} />
                    })}
                </div>
            </div>
        );
    }
}
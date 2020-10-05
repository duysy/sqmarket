import React, { Component } from "react";
import "./styles.css"
export default class extends Component {
    constructor() {
        super();
        this.goToTop = this.goToTop.bind(this);
        this.state = {
            displayScroll: ""
        }
    }
    goToTop() {
        for (let i = window.pageYOffset; i > 0; i--) {
            document.querySelector('html').scrollTo(0, i);
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 100) {
                this.setState({
                    displayScroll: "display-block"
                });
            }
            else {
                this.setState({
                    displayScroll: ""
                })
            }
        });
    }
    render() {
        return (
            <div className={this.state.displayScroll + " btn-scroll-top"} onClick={this.goToTop}>
                <i className="fa fa-arrow-up" aria-hidden="true" ></i>
            </div>
        );
    }
}
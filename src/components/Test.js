import React, { Component } from "react";
import 'font-awesome/css/font-awesome.min.css';
import { Header, Navbar, ItemCategory, Banner, CategoryCard, ProductCard, Footer, CardComment } from "./molecules";
import { HomePage, Mn_Test } from "./pages"
import { GoTopPage, StarRate, TabView } from "./atoms";
import parse from 'html-react-parser';

const styles = {
    width: "100%",
    height: "300px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}
const dataImages = [
    "https://loremflickr.com/1500/500",
    "https://loremflickr.com/1500/501"
]
const dataTabView = [
    {
        title: "Description",
        content: <StarRate numberStar="1" />

    },
    {
        title: "Description",
        content: <StarRate numberStar="1" />

    }
]
export default class extends Component {
    constructor() {
        super();
        this.state = {
            content: ""
        }
    }
    componentDidMount() {
        fetch("https://gateway.pinata.cloud/ipfs/QmVLiVzjvER8Uwzk81VCG4ndv4UpBrCar4QcRFja3HYK6a")
            .then(res => res.text())
            .then(
                (result) => {
                    this.setState({
                        content:result
                    });
                },
                (error) => {
                    this.setState({
                        content:"null"
                    });
                }
            )
    }
    render() {
        return (
            <div>
                {/* <Header></Header>
              <Navbar></Navbar> */}
                {/* <ItemCategory></ItemCategory>
              <Banner dataImage={dataImages} timeChange="3000"></Banner>
              <CategoryCard></CategoryCard>
              <ProductCard></ProductCard>
              <Footer></Footer>
              <HomePage></HomePage> */}
                {/* <StarRate numberStar="2"></StarRate> */}
                {/* <GoTopPage>Top</GoTopPage> */}
                {/* <TabView dataTabView={dataTabView}></TabView> */}
                {/* <CardComment/> */}
                {/* <Mn_Test/> */}
                <div>
                    {parse(this.state.content)}
                </div>

            </div>
        );
    }
};


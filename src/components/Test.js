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
export default class extends Component {
    constructor() {
        super();
        this.state = {
            dataTabView: []
        }

    }
    async componentDidMount() {
        let data = await this.getData("https://gateway.pinata.cloud/ipfs/QmdzkZW23asVo6FGpo5mLzCigFm1SLngAXfgzxPbS69HbV");;
        this.setState({
            dataTabView: [
                {
                    title: "Description",
                    content: parse(data)

                },
                {
                    title: "Description",
                    content: <StarRate numberStar="1" />

                }
            ]
        })
    }
    async getData(url) {
        try {
            const response = await fetch(url)
            const data = await response.text()
            return data
        } catch (err) {
            console.log(err)
        }
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
                <TabView dataTabView={this.state.dataTabView}></TabView>
                {/* <CardComment/> */}
                {/* <Mn_Test/>
                <div>
                    {parse(this.state.content)}
                </div> */}

            </div>
        );
    }
};


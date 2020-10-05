import React, { Component } from "react";
import 'font-awesome/css/font-awesome.min.css';
import { Header, Navbar, ItemCategory, Banner, CategoryCard, ProductCard, Footer } from "./molecules";
import { HomePage } from "./pages"
import { GoTopPage, StarRate, TabView } from "./atoms";
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
                <TabView dataTabView={dataTabView}></TabView>

            </div>
        );
    }
};


import React, { Component } from "react";
import {Button} from "./atoms";
import {Header,Navbar,Itemcategities,Banner} from "./molecules";
const styles = {
    width:"100%",
    height:"300px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}
const dataImages=[
    "https://www.chotot.com/kinhnghiem/wp-content/uploads/2019/02/cho-nhat.jpg",
    "https://www.chotot.com/kinhnghiem/wp-content/uploads/2018/05/cho-alaska-cho-tot.jpg"
]
export default class extends Component {
    render() {
        return (
            <div>
              <Header></Header>
              <Navbar></Navbar>
              <Itemcategities></Itemcategities>
              <Banner dataImage={dataImages} timeChange="3000"></Banner>
            </div>
        );
    }
};


import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import IpfsRouter from 'ipfs-react-router';
import Test from "./components/Test"
import { HomePage, Cart, ProductDetail, Seller, LoadingPage } from "./components/pages";
const mainContent = () => {
  return (
    <IpfsRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/cart" component={Cart} />
        <Route path="/product_detail" exact component={ProductDetail} />
        <Route path="/test" exact component={Test} />
        <Route path="/seller" exact component={Seller} />
      </Switch>
    </IpfsRouter>
  );
}
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true
    }
  }
  componentDidMount() {
    window.onload = () => {
      this.setState({
        isLoading: false
      });
    }

  }
  render() {
    return (
      <div className="App">
        {this.state.isLoading ? <LoadingPage /> : mainContent()}
      </div>

    );
  }
}
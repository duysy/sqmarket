import React from "react";
import { Route, Switch } from "react-router-dom";
import IpfsRouter from 'ipfs-react-router';
import Test from "./components/Test"
import {HomePage,Cart,ProductDetail} from "./components/pages"
export default function App() {
  const test = () => {
    return ("This is Test");
  };
  return (
    <div className="App">
      <IpfsRouter>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/cart" component={Cart} />
          <Route path="/product_detail" exact component={ProductDetail} />
          <Route path="/test" exact component={Test} />
        </Switch>
        </IpfsRouter>
    </div >
   
  );
}
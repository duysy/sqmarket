import React from "react";
import { Route, Switch } from "react-router-dom";
import IpfsRouter from 'ipfs-react-router';
import Test from "./components/Test"
export default function App() {
  return (
    <div className="App">
      <IpfsRouter>
        <Switch>
          <Route path="/" exact component={Test} />
          <Route path="/test" exact component={Test} />
        </Switch>
        </IpfsRouter>
    </div >
   
  );
}
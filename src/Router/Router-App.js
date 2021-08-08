import React from "react";
import Navigation from "./Router/Navigation";
import Home from "./Router/Home";
import Signin from "./Router/Signin";
import {BrowserRouter,Route} from "react-router-dom";

function App(){
return(
  <div className="App">
      <BrowserRouter>
        <Navigation/>
          <Route exact path="/" component={Home}/>
          <Route path="/signin" component={Signin}/>
      </BrowserRouter>
  </div>
  );
}
export default App
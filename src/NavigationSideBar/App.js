import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Notifications from "./NavigationSideBar/UserDashboard/Notifications";
import Projects from "./NavigationSideBar/UserDashboard/Projects";
import Post from "./NavigationSideBar/UserDashboard/Post";
import Chats from "./NavigationSideBar/UserDashboard/Chats";
import UsrPrfl from "./NavigationSideBar/UserDashboard/UsrPrfl";
import UserDashboard from "./NavigationSideBar/UserDashboard/UserDashboard";

// import BuilderProfile from "./BuilderDashboard/BuilderProfile";
// import MyBids from "./BuilderDashboard/MyBids";
// import Available from "./BuilderDashboard/Available";
// import BuilderDashboard from "./BuilderDashboard/BuilderDashboard";
// import Header from "./Header/Header";

const App = () => {
  return (
    <div>
      {/* <Header /> */}
      <Router>
        <UserDashboard />
        <Switch>
          <Route path="/" exact component={UsrPrfl} />
          <Route path="/projects" component={Projects} />
          <Route path="/post" component={Post} />
          <Route path="/notifications" component={Notifications} />
          <Route path="/chats" component={Chats} />
        </Switch>
      </Router>

      {/* <Router>
        <BuilderDashboard />
        <Switch>
          <Route path="/" exact component={BuilderProfile} />
          <Route path="/projects" component={MyBids} />
          <Route path="/post" component={Available} />
          <Route path="/notifications" component={Notifications} />
          <Route path="/chats" component={Chats} />
        </Switch>
      </Router> */}
    </div>
  );
};
export default App;

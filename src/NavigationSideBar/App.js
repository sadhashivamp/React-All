import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Notifications from "./UserDashboard/Notifications";
import Projects from "./UserDashboard/Projects";
import Post from "./UserDashboard/Post";
import Chats from "./UserDashboard/Chats";
import UsrPrfl from "./UserDashboard/UsrPrfl";
import UserDashboard from "./UserDashboard/UserDashboard";

const App = () => {
  return (
    <div>
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
    </div>
  );
};
export default App;

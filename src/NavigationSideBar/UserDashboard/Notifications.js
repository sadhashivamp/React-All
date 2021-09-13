import React from "react";
import ReactNotification, { store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import "react-notifications/lib/notifications.css";
// import Animate from "animate.css-react";

import "animate.css";

import "animate.css/animate.css";

function Notifications() {
  return (
    <div className="notifications">
      <ReactNotification>
        <h1>Notifications</h1>
      </ReactNotification>
      <Home />
    </div>
  );
}

function Home() {
  const handleOnClickDefault = () => {
    store.addNotification({
      title: "New Card Added",
      message: "Tom added the card",
      type: "success",
      container: "top-right",
      insert: "top",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],

      dismiss: {
        duration: 4000,
        showIcon: true,
      },
      width: 600,
    });
  };

  return (
    <div>
      <button onClick={handleOnClickDefault}>default</button>
    </div>
  );
}

export default Notifications;

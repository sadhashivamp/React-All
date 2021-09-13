import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import "./dashbrd.css";

export const builderData = [
  {
    title: "Builder Profile",
    path: "/builderprofile",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Available",
    path: "/Bpost",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "My Bids",
    path: "/Bprojects",
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text",
  },
  {
    title: "Chat",
    path: "/Bchats",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
  {
    title: "Notifications",
    path: "/Bnotifications",
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "nav-text",
  },
];

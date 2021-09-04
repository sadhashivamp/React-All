import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const builderData = [
  {
    title: "Profile",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Available",
    path: "/post",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "My Bids",
    path: "/projects",
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text",
  },
  {
    title: "Chat",
    path: "/chats",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
  {
    title: "Notifications",
    path: "/notifications",
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "nav-text",
  },
];
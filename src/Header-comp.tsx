import React from "react";
import menu from "./imgs/menu.png";
import account from "./imgs/menu.png";

const Header: React.VFC = () => {
  return (
    <div className="header">
      <img className="icon" alt="" src={menu} />
      <h4>taitoru </h4>
      <img className="icon" alt="" src={account} />
    </div>
  );
};

export default Header;

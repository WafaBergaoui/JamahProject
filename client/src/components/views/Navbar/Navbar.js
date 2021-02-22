import React, { useState } from "react";
import Menu from "./Menu";
import { Drawer } from "antd";
import "./Navbar.css";

function NavBar() {
  const [visible, setVisible] = useState(false);

  const onClose = () => {
    setVisible(false);
  };

  return (
    <nav
      className="menu"
      style={{ position: "fixed", zIndex: 5, width: "100%" }}
    >
      <div className="menu__logo">
        <a href="/">Logo</a>
      </div>

      <div className="menu__container">
        <div className="menu_rigth">
          <Menu mode="horizontal" />
        </div>

        <Drawer
          title="Basic Drawer"
          placement="right"
          className="menu_drawer"
          closable={false}
          onClose={onClose}
          visible={visible}
        >
          <Menu mode="inline" />
        </Drawer>
      </div>
    </nav>
  );
}

export default NavBar;

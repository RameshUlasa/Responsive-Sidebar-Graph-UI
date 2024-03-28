import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
// import { Link } from "react-router-dom";

// Icons
import { RxHamburgerMenu } from "react-icons/rx";
import { FaPeopleGroup } from "react-icons/fa6";
import { LuHome } from "react-icons/lu";
import { IoPricetagsOutline } from "react-icons/io5";
import { FaWallet } from "react-icons/fa6";
import { MdNotificationsActive } from "react-icons/md";
import { CiCircleQuestion } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";

import "./index.css";

//Bootstrap Navbar for small screens
function OffCanvasExample({ name, placement, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="null" onClick={handleShow}>
        <RxHamburgerMenu className="burger-icon" />
      </Button>
      <Offcanvas
        className="bg-dark"
        show={show}
        onHide={handleClose}
        placement={placement}
        {...props}
      >
        <Offcanvas.Header className="offcanvas-header">
          <Offcanvas.Title className="header">Welcome to Ethan</Offcanvas.Title>
          <Button
            variant="light"
            onClick={handleClose}
            className="custom-close-btn"
          >
            &times;
          </Button>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <nav className="nav-elements-container">
            <div>
              <p className="nav-item">
                <LuHome className="icon" />
                Home
              </p>
              <p className="nav-item">
                <FaPeopleGroup className="icon" />
                Population
              </p>
              <p className="nav-item">
                <IoPricetagsOutline className="icon" />
                Crypto Prices
              </p>
              <p className="nav-item">
                <FaWallet className="icon" />
                Wallet
              </p>
            </div>
            <div>
              <p className="nav-item">
                <MdNotificationsActive className="icon" />
                Notifications
              </p>
              <p className="nav-item">
                <CiCircleQuestion className="icon" />
                Suport
              </p>
              <p className="nav-item">
                <IoSettingsOutline className="icon" />
                Settings
              </p>
            </div>
          </nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

//Navbar code starts here
const Navbar = () => {
  const [activeItem, setActiveItem] = useState("Home");

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  return (
    <>
      {/* Navbar for small screens */}
      <div className="logo-nav-container-sm">
        <h1 className="logo">
          Ethan<span className="logo-sub">Pro</span>
        </h1>
        <OffCanvasExample name="end" placement="end" />
      </div>

      {/* Navbar sidebar for large screens */}
      <div className="logo-nav-container-lg">
        <h1 className="logo">
          Ethan<span className="logo-sub">Pro</span>
        </h1>
        <nav className="nav-elements-container">
          <div>
            <p
              className={`nav-item ${activeItem === "Home" ? "active" : ""}`}
              onClick={() => handleItemClick("Home")}
            >
              <LuHome className="icon" />
              Home
            </p>
            <p
              className={`nav-item ${
                activeItem === "Population" ? "active" : ""
              }`}
              onClick={() => handleItemClick("Population")}
            >
              <FaPeopleGroup className="icon" />
              Population
            </p>
            <p
              className={`nav-item ${
                activeItem === "Crypto Prices" ? "active" : ""
              }`}
              onClick={() => handleItemClick("Crypto Prices")}
            >
              <IoPricetagsOutline className="icon" />
              Crypto Prices
            </p>
            <p
              className={`nav-item ${activeItem === "Wallet" ? "active" : ""}`}
              onClick={() => handleItemClick("Wallet")}
            >
              <FaWallet className="icon" />
              Wallet
            </p>
          </div>
          <div>
            <p
              className={`nav-item ${
                activeItem === "Notifications" ? "active" : ""
              }`}
              onClick={() => handleItemClick("Notifications")}
            >
              <MdNotificationsActive className="icon" />
              Notifications
            </p>
            <p
              className={`nav-item ${activeItem === "Support" ? "active" : ""}`}
              onClick={() => handleItemClick("Support")}
            >
              <CiCircleQuestion className="icon" />
              Support
            </p>
            <p
              className={`nav-item ${
                activeItem === "Settings" ? "active" : ""
              }`}
              onClick={() => handleItemClick("Settings")}
            >
              <IoSettingsOutline className="icon" />
              Settings
            </p>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;

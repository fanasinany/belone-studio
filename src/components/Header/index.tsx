import * as React from "react";
import "./styles.scss";
import BeloneIcon from "../Icons/BeloneIcon";

const Header = () => {
  return (
    <header>
      <nav>
        <ul className="navLeft">
          <li className="active">
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#">Team</a>
          </li>
        </ul>
        <a href="">
          <BeloneIcon height={44}/>
        </a>
        <ul className="navRight">
          <li>
            <a href="#">Graphic Design</a>
          </li>
          <li>
            <a href="#">Website</a>
          </li>
          <li>
            <a href="#">Illustration</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

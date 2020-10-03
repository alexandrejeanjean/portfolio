import React from "react";
import { Link } from "react-router-dom";

import { Mail } from "../../Assets/imgPath";
import "./header.scss";

const Header = () => (
  <header className="header">
    <Link className="author-name" to="/">
      alexandre jeanjean
    </Link>
    <a href="mailto:jeanjeanalexandre@gmail.com" title="contactez-moi">
      <img className="contact" src={Mail} alt="" />
    </a>
  </header>
);

export default Header;

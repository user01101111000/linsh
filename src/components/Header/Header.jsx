import style from "./Header.module.css";
import logo from "../../assets/images/logo.svg";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className={style.header}>
      <img src={logo} alt="logo" className={style.logo} />

      <div className={`${style.navLinks} ${showMenu ? style.show : ""}`}>
        <nav className={style.navMenu}>
          <a href="https://github.com/aresheus" target="_blank">
            Features
          </a>
          <a href="https://github.com/aresheus" target="_blank">
            Pricing
          </a>
          <a href="https://github.com/aresheus" target="_blank">
            Resources
          </a>
        </nav>

        <div className={style.authButtons}>
          <button className={style.loginBtn}>Login</button>
          <button className={style.signUpBtn}>Sign Up</button>
        </div>
      </div>

      <FiMenu
        className={style.menuIcon}
        onClick={() => setShowMenu((showMenu) => !showMenu)}
      />
    </header>
  );
}

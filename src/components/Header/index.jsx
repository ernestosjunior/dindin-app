import React from "react";
import { ReactComponent as Logo } from "../../assets/svg/logo.svg";
import { ReactComponent as LogOut } from "../../assets/svg/log-out.svg";
import styles from "./index.module.scss";

function Header() {
  const dontRenderLogOut = ["/login", "/cadastro"];
  const path = window.location.pathname;

  return (
    <header className={styles.container}>
      <div className={styles.logo}>
        <Logo />
        <h1>Dindin</h1>
      </div>
      {!dontRenderLogOut.includes(path) && <LogOut />}
    </header>
  );
}

export default Header;

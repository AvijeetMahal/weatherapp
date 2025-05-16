import React from "react";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.title}>Weather</h1>
      {/* <button className={styles.addButton}>+</button> */}
    </nav>
  );
};

export default Navbar;
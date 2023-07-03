import React from "react";
import Navbar from "@theme-original/Navbar";
import type NavbarType from "@theme/Navbar";
import type { WrapperProps } from "@docusaurus/types";
import NavbarColorModeToggle from "@theme/Navbar/ColorModeToggle";
import Link from "@docusaurus/Link";
import styles from "./index.module.css";

type Props = WrapperProps<typeof NavbarType>;

export default function NavbarWrapper(props: Props): JSX.Element {
  return (
    <div className={styles.navbarContainer}>
      <div>
        <h1>
          <Link className={styles.headerName} to="/">
            Junho Choi
          </Link>
        </h1>
      </div>
      <div className={styles.menuContainer}>
        <div className={styles.menu}>
          <div className={styles.menuItem}>
            <Link className={styles.menuItemLink} to="/blog">
              blog
            </Link>
          </div>
          <div className={styles.menuItem}>
            <Link className={styles.menuItemLink} to="/experience">
              experience
            </Link>
          </div>
          <div className={styles.menuItem}>
            <Link className={styles.menuItemLink} to="/projects">
              projects
            </Link>
          </div>
        </div>
        <NavbarColorModeToggle className={styles.test} />
      </div>
    </div>
  );
}

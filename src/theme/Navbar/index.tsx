import React from "react";
import Navbar from "@theme-original/Navbar";
import type NavbarType from "@theme/Navbar";
import type { WrapperProps } from "@docusaurus/types";
import NavbarColorModeToggle from "@theme/Navbar/ColorModeToggle";
import styles from "./index.module.css";

type Props = WrapperProps<typeof NavbarType>;

export default function NavbarWrapper(props: Props): JSX.Element {
  return (
    <div className={styles.navbarContainer}>
      <div>
        <h1>Junho Choi</h1>
      </div>
      <div>
        <ul>
          <li>blog</li>
          <li>experience</li>
          <li>projects</li>
        </ul>
        <NavbarColorModeToggle />
      </div>
    </div>
  );
}

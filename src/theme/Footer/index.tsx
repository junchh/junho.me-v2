import React from "react";
import Footer from "@theme-original/Footer";
import type FooterType from "@theme/Footer";
import type { WrapperProps } from "@docusaurus/types";
import styles from "./index.module.css";

type Props = WrapperProps<typeof FooterType>;

export default function FooterWrapper(props: Props): JSX.Element {
  return (
    <div className={styles.footerContainer}>
      <p>© 2023 Junho Choi · Built with Docusaurus</p>
    </div>
  );
}

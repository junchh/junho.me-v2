import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import NavbarColorModeToggle from "@theme/Navbar/ColorModeToggle";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.image}></div>
        <div className={styles.contentText}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            dolore vel, eius sint nihil esse maiores fugiat dolorum perferendis.
            Asperiores eius ipsam perspiciatis impedit tempore eum officiis
            itaque natus modi?
          </p>
        </div>
        <div className={styles.contact}></div>
      </div>
    </div>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout
      title={`Home`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
    </Layout>
  );
}

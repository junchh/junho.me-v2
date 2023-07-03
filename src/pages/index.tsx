import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import NavbarColorModeToggle from "@theme/Navbar/ColorModeToggle";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return <div></div>;
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

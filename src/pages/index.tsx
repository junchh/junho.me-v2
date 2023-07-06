import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import NavbarColorModeToggle from "@theme/Navbar/ColorModeToggle";
import styles from "./index.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.image}>
          <img src={require("@site/static/img/profile.jpg").default} />
        </div>
        <div className={styles.contentText}>
          <h1 className={styles.greeting}>Hello.</h1>
          <p>
            Welcome to this little corner of mine. I craft various interesting
            gizmo on the web ranging from interactive games to wacky user
            interfaces, utilizing the power of TypeScript and React (or other
            frameworks).
          </p>
        </div>
        <div className={styles.contact}>
          <div className={styles.links}>
            <Link to={"mailto:cjunho9868@gmail.com"}>
              <FontAwesomeIcon className={styles.icon} icon={faEnvelope} />
            </Link>
            <Link to={"https://www.linkedin.com/in/junhoch/"}>
              <FontAwesomeIcon className={styles.icon} icon={faLinkedin} />
            </Link>
            <Link to={"https://github.com/junchh"}>
              <FontAwesomeIcon className={styles.icon} icon={faGithub} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout title={`Home`} description="Junho Choi Hediyatmo's Homepage">
      <HomepageHeader />
    </Layout>
  );
}

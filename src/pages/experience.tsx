import React from "react";
import Layout from "@theme/Layout";
import styles from "./experience.module.css";

export default function Experience() {
  return (
    <Layout title="Experience">
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <h3>Experience</h3>
          <div className={styles.experienceContainer}>
            <div className={styles.expItem}>
              <div className={styles.itemHeader}>
                <div className={styles.imageContainer}>
                  <img
                    className={styles.companyImage}
                    src={require("@site/static/img/cosmart.png").default}
                  />
                </div>

                <div className={styles.headerText}>
                  <h4>Cosmart</h4>
                  <h5>Software Engineer</h5>
                  <h6>Aug 2022 - Present</h6>
                </div>
              </div>
              <div className={styles.itemContent}>
                <ul>
                  <li>lorem ipsum</li>
                  <li>lorem ipsum</li>
                  <li>lorem ipsum</li>
                </ul>
              </div>
            </div>
            <div className={styles.expItem}>
              <div className={styles.itemHeader}>
                <div className={styles.imageContainer}>
                  <img
                    className={styles.companyImage}
                    src={require("@site/static/img/traveloka.png").default}
                  />
                </div>

                <div className={styles.headerText}>
                  <h4>Traveloka</h4>
                  <h5>Part-time Software Engineer</h5>
                  <h6>Mar 2022 - Jul 2022</h6>
                </div>
              </div>
              <div className={styles.itemContent}>
                <ul>
                  <li>lorem ipsum</li>
                  <li>lorem ipsum</li>
                  <li>lorem ipsum</li>
                </ul>
              </div>
            </div>
            <div className={styles.expItem}>
              <div className={styles.itemHeader}>
                <div className={styles.imageContainer}>
                  <img
                    className={styles.companyImage}
                    src={require("@site/static/img/traveloka.png").default}
                  />
                </div>

                <div className={styles.headerText}>
                  <h4>Traveloka</h4>
                  <h5>Web Engineer Intern</h5>
                  <h6>Aug 2021 - Jan 2022</h6>
                </div>
              </div>
              <div className={styles.itemContent}>
                <ul>
                  <li>lorem ipsum</li>
                  <li>lorem ipsum</li>
                  <li>lorem ipsum</li>
                </ul>
              </div>
            </div>
            <div className={styles.expItem}>
              <div className={styles.itemHeader}>
                <div className={styles.imageContainer}>
                  <img
                    className={styles.companyImage}
                    src={require("@site/static/img/gdplabs.jpg").default}
                  />
                </div>

                <div className={styles.headerText}>
                  <h4>GDP Labs</h4>
                  <h5>Software Development Engineer Intern</h5>
                  <h6>Jun 2021 - Aug 2021</h6>
                </div>
              </div>
              <div className={styles.itemContent}>
                <ul>
                  <li>lorem ipsum</li>
                  <li>lorem ipsum</li>
                  <li>lorem ipsum</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

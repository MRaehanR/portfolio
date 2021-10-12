import React, { Component } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Certificate from "../Containers/Certificate/Certificate";
import styles from "../styles/Index.module.css";

export default class certificate extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.sidebar}>
          <Sidebar />
        </div>
        <div className={styles.body}>
          <Certificate />
        </div>
      </div>
    );
  }
}

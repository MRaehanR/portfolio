import React from "react";
import styles from "../../styles/Sidebar.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBookOpen,
  faCertificate,
  faHome,
} from "@fortawesome/free-solid-svg-icons";

function Sidebar() {
  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <div className={styles.profileImg}>
          <Image
            src="/photo.JPG"
            width="150px"
            height="150px"
            alt="photo profile"
            objectFit="cover"
          />
        </div>
        <div className={styles.name}>
          <h2>M. Raehan Robban</h2>
        </div>
        <div className={styles.social}>
          <div className={styles.socialItem}>
            <a href="#">
              <FontAwesomeIcon icon={faInstagram} size="lg" color="#fff" />
            </a>
          </div>
          <div className={styles.socialItem}>
            <a href="#">
              <FontAwesomeIcon icon={faGithub} size="lg" color="#fff" />
            </a>
          </div>
          <div className={styles.socialItem}>
            <a href="#">
              <FontAwesomeIcon icon={faLinkedin} size="lg" color="#fff" />
            </a>
          </div>
        </div>
        <div className={styles.nav}>
          <div className={styles.navlink}>
            <FontAwesomeIcon icon={faHome} />
            <a href="#">Me</a>
          </div>
          <div className={styles.navlink}>
            <FontAwesomeIcon icon={faBookOpen} />
            <a href="#">Portfolio</a>
          </div>
          <div className={styles.navlink}>
            <FontAwesomeIcon icon={faCertificate} />
            <a href="#">Certificate</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

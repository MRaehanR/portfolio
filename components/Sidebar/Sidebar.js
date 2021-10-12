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
import Link from 'next/link'

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
            <Link href="https://www.instagram.com/orsterdohm/" passHref>
              <FontAwesomeIcon icon={faInstagram} size="lg" color="#fff" />
            </Link>
          </div>
          <div className={styles.socialItem}>
            <Link href="https://github.com/MRaehanR" passHref>
              <FontAwesomeIcon icon={faGithub} size="lg" color="#fff" />
            </Link>
          </div>
          <div className={styles.socialItem}>
            <Link href="https://www.linkedin.com/in/raehan-robban-488994203/" passHref>
              <FontAwesomeIcon icon={faLinkedin} size="lg" color="#fff" />
            </Link>
          </div>
        </div>
        <div className={styles.nav}>
          <div className={styles.navlink}>
            <FontAwesomeIcon icon={faHome} />
            <Link href="/">Home</Link>
          </div>
          <div className={styles.navlink}>
            <FontAwesomeIcon icon={faBookOpen} />
            <Link href="https://github.com/MRaehanR">Portfolio</Link>
          </div>
          <div className={styles.navlink}>
            <FontAwesomeIcon icon={faCertificate} />
            <Link href="/certificate">Certificate</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

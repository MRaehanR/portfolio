import Head from "next/head";
import Image from "next/image";
import Sidebar from "../components/Sidebar/Sidebar";
import Certificate from "../Containers/Certificate/Certificate";
import Home from "../Containers/Home/Home";
import styles from "../styles/Index.module.css";

export default function Index() {
  return (
    <div className={styles.container}>      
        <div className={styles.sidebar}>
          <Sidebar/>
        </div>       
        <div className={styles.body}>
          <Certificate />
        </div>      
    </div>
  );
}

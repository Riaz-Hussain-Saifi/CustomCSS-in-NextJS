import Image from "next/image";
import styles from "./styles/home.module.css";

export default function Home() {
  return (
    <div>
      <h1 className={styles.hero}>This is <span className={styles.span}>Home</span> page</h1>
      <h1 className={styles.hero}>Go to <span className={styles.span}><a href="./about">About</a></span> page</h1>
      <h1 className={styles.hero}>Go to <span className={styles.span}><a href="./contact">Contact</a></span> page</h1>
    </div>
  );
}

import Image from "next/image";
import styles from "./styles/home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className={styles.hero}>This is <span className={styles.span}>Home</span> page</h1>
      <h1 className={styles.hero}>Go to <span className={styles.span}><Link href="./about">About</Link></span> page</h1>
      <h1 className={styles.hero}>Go to <span className={styles.span}><Link href="./contact">Contact</Link></span> page</h1>
    </div>
  );
}

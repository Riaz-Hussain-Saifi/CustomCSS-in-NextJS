import React from 'react'
import styles from "../styles/navbar.module.css";
import Link from 'next/link';


const Navbar = () => {
  return (
    <div className={styles.navbar_main}>
      <div className={styles.navbar}>
        <div className={styles.company_name}>Company Name
        </div>
        <ul className={styles.navbar_list}>
            <li className={styles.list}><Link href="/">Home</Link></li>
            <li className={styles.list}><Link href="./about">About</Link></li>
            <li className={styles.list}><Link href="./contact">Contact</Link></li>
        </ul>

      </div>
    </div>
  )
}

export default Navbar

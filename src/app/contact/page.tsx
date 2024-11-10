import React from 'react'
import styles from '../styles/contact.module.css'
import Link from 'next/link'

const Contact = () => {
  return (
    <div>
      <h1 className={styles.hero}>This is <span className={styles.span}>Contact</span> page</h1>
      <h1 className={styles.hero}>Go to <span className={styles.span}><Link href="/">Home</Link></span> page</h1>
      <h1 className={styles.hero}>Go to <span className={styles.span}><Link href="./about">About</Link></span> page</h1>
    </div>
  )
}

export default Contact

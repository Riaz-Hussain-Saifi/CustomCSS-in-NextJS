import React from 'react'
import styles from '../styles/contact.module.css'

const Contact = () => {
  return (
    <div>
      <h1 className={styles.hero}>This is <span className={styles.span}>Contact</span> page</h1>
      <h1 className={styles.hero}>Go to <span className={styles.span}><a href="/">Home</a></span> page</h1>
      <h1 className={styles.hero}>Go to <span className={styles.span}><a href="./about">About</a></span> page</h1>
    </div>
  )
}

export default Contact

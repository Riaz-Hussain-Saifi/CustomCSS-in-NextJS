import React from 'react'
import styles from '../styles/about.module.css'

const About = () => {
  return (
    <div>
      <h1 className={styles.hero}>This is <span className={styles.span}>About</span> page</h1>
      <h1 className={styles.hero}>Go to <span className={styles.span}><a href="/">Home</a></span> page</h1>
      <h1 className={styles.hero}>Go to <span className={styles.span}><a href="./contact">Contact</a></span> page</h1>
    </div>
  )
}

export default About

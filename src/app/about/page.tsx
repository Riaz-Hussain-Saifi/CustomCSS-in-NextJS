import React from 'react'
import Link from 'next/link'
import styles from '../styles/about.module.css'

const About = () => {
  return (
    <div>
      <h1 className={styles.hero}>This is <span className={styles.span}>About</span> page</h1>
      <h1 className={styles.hero}>Go to <span className={styles.span}><Link href="/">Home</Link></span> page</h1>
      <h1 className={styles.hero}>Go to <span className={styles.span}><Link href="./contact">Contact</Link></span> page</h1>
    </div>
  )
}

export default About

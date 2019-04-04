import React from 'react';
import styles from './Landing.module.css';
import { FaHandPointUp } from 'react-icons/fa';
import Appointment from '../appointment/Appointment';

export default function Landing() {
  return(
    <div className={styles.background}>
        <header>
            <h3 className={styles.h3}>HealthSparq Hackathon</h3>
        </header>
        <h2 className={styles.h2}>Plan Your Next Appointment</h2>
        <div className={styles.startContainer}>
            <h4 className={styles.h4}>Tap to start</h4>
            <FaHandPointUp className={styles.finger}/>
        </div>
        <Appointment/>
    </div>
  )
}

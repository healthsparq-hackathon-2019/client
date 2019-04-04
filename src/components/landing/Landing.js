import React from 'react';
import styles from './Landing.module.css';
import Appointment from '../appointment/Appointment';
import Footer from '../footer/Footer';

export default function Landing() {
  return(
    <div className={styles.background}>
        <header>
            <h3 className={styles.h3}>HealthSparq Hackathon</h3>
        </header>
        <Appointment/>
        <Appointment/>
        <Appointment/>
        <Appointment/>
        <Footer/>
    </div>
  )
}

import React from 'react';
import styles from './Landing.module.css';
import Appointment from '../appointment/Appointment';
import Footer from '../footer/Footer';
import Header from '../header/Header';

export default function Landing() {
  return(
    <div className={styles.background}>
        <Header/>
        <div className={styles.dark}>
          <Appointment/>
          <Appointment/>
        </div>
        <div className={styles.light}>
          <Appointment/>
          <Appointment/>
        </div>
        <div className={styles.dark}>
          <Appointment/>
          <Appointment/>
        </div>
        <Footer/>
    </div>
  )
}

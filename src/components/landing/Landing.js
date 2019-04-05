import React from 'react';
import styles from './Landing.module.css';
import Appointment from '../appointment/Appointment';
import Footer from '../footer/Footer';
import Header from '../header/Header';

export default function Landing() {
  return(
    <div className={styles.background}>
        <Header/>
          <Appointment/>
          <Appointment/>
          <Appointment/>
          <Appointment/>
          <Appointment/>
          <Appointment/>
        <Footer/>
    </div>
  )
}

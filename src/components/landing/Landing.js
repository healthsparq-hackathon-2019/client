import React from 'react';
import styles from './Landing.module.css';
import Appointment from '../appointment/Appointment';
import Footer from '../footer/Footer';
import Header from '../header/Header';

const data = [
  {
    title: 'Check up',
    date: 'Tomorrow',
    img: 'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn2.iconfinder.com%2Fdata%2Ficons%2Fhealth-care-8%2F512%2Fdoctor_appointment-512.png&f=1'
  }
]

export default function Landing() {
  return(
    <div className={styles.background}>
        <Header/>
          <Appointment appointment={data[0]}/>
        <Footer/>
    </div>
  )
}

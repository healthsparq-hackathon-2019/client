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
  },
  {
    title: 'Immunization',
    date: 'Thursday',
    img: 'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn1.iconfinder.com%2Fdata%2Ficons%2Fhealth-fitness-icons%2F60%2FneedleColor-512.png&f=1'
  },
  {
    title: 'New Cast',
    date: '18th',
    img: 'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.clipartbest.com%2Fcliparts%2FncB%2FGbA%2FncBGbA87i.gif&f=1'
  }
]

export default function Landing() {
  return(
    <div className={styles.background}>
        <Header/>
          <Appointment appointment={data[0]}/>
          <Appointment appointment={data[1]}/>
          <Appointment appointment={data[2]}/>
        <Footer/>
    </div>
  )
}

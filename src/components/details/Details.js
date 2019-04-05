import React from 'react';
import pic from '../../assets/docpic.jpg';
import styles from './Details.module.css';
import { FaCalendarPlus, FaTimes } from 'react-icons/fa';

function Details() {
  return (
    <section className={styles.Details}>
      <h2 className={styles.apt}>APPOINTMENT DETAILS</h2>
      <section className={styles.visit}>
        <h3>OFFICE VISIT</h3>
        <p className={styles.p}>Friday, April 5</p>
      </section>
      <section className={styles.top}>
        <div className={styles.div}>
          <p className={styles.arrive}>Arrive by 4:45pm</p>
          <p className={styles.start}>Appointment starts at 5pm</p>
        </div>
        <div className={styles.aptButton}>
          <button className={styles.button}>add to my calendar<FaCalendarPlus /></button>
          <button className={styles.button}>cancel apt<FaTimes /></button>
        </div>
      </section>
      <section className={styles.main}>
        <section className={styles.section}>
          <h4 className={styles.h4}>
            YOUR APPOINTMENT IS WITH
        </h4>
          <figure className={styles.figure}>
            <img src={pic} alt="doctor pic" className={styles.pic} />
            <figcaption className={styles.figcaption}> Melissa S. Yamauchi, M.D.</figcaption>
          </figure>
          <p className={styles.atOn}>AT</p>
          <p className={styles.p}>Providence Hospital St. Vincent</p>
          <p className={styles.p}>9205 SW Barnes Rd.</p>
          <p className={styles.p}>Suite 200</p>
          <p className={styles.p}>Portland, OR 97225</p>
        </section>
        <section className={styles.section}>
          <h4 className={styles.h4}>SET REMINDERS</h4>
          <section className={styles.reminders}>
          <button>PHONE</button>
          <button>TEXT</button>
          </section>
        </section>
      </section>
    </section>
  )
}
export default Details;

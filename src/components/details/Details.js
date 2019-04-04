import React from 'react';
import pic from '../../assets/docpic.jpg';
import styles from './Details.module.css';
import { FaHome } from 'react-icons/fa';

function Details() {
  return (
    <section className={styles.Details}>
      <button className={styles.button}><FaHome /></button>
      <h2 className={styles.apt}>APPOINTMENT DETAILS</h2>
      <section className={styles.main}>
        <section className={styles.section}>
        <h4 className={styles.h4}>
          YOUR APPOINTMENT IS WITH
        </h4>
          <figure className={styles.figure}>
            <img src={pic} alt="doctor pic" className={styles.pic} />
            <figcaption className={styles.figcaption}> Melissa S. Yamauchi, M.D.</figcaption>
          </figure>
        </section>
        <section className={styles.section}>
          <p className={styles.atOn}>AT</p>
          <p className={styles.p}>Providence Hospital St. Vincent</p>
          <p className={styles.p}>9205 SW Barnes Rd.</p>
          <p className={styles.p}>Suite 200</p>
          <p className={styles.p}>Portland, OR 97225</p>
        </section>
        <section className={styles.section}>
          <p className={styles.atOn}>ON</p>
          <p className={styles.p}>April 5, 2019 at 5pm</p>
          <p className={styles.p}>Check-in at 4:45pm</p>
        </section>
      </section>
    </section>
  )
}
export default Details;

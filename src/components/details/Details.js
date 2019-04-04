import React from 'react';
import pic from '../../assets/docpic.jpg';
import styles from './Details.module.css';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Footer from '../footer/Footer';

function Details() {
  return (
    <section className={styles.Details}>
    <Link to='/' className={styles.button}><FaHome /></Link>
        <h2 className={styles.apt}>APPOINTMENT DETAILS</h2>
      <section className={styles.section}>
        <h3 className={styles.h}>Providence Hospital St. Vincent</h3>
        <p className={styles.p}>9205 SW Barnes Rd.</p> 
        <p className={styles.p}>Suite 200</p>
        <p className={styles.p}>Portland, OR 97225</p>
      </section>
      <section className={styles.section }>
          <h3 className={styles.doc}>DOCTOR</h3>
        <figure className={styles.figure}>
          <img src={pic} alt="doctor pic" className={styles.pic}/>
          <figcaption className={styles.figcaption}> Melissa S. Yamauchi, M.D.</figcaption>
        </figure>
      </section>
      <section className={styles.section}>
        <h3 className={styles.date}>DATE</h3>
        <p className={styles.p}>April 5, 2019</p>
        <p className={styles.p}>5pm</p>
        <p className={styles.p}>Check-in: 4:45pm</p>
      </section>
      <Footer/>
    </section>
  )
}
export default Details;

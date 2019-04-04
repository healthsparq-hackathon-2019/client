import React from 'react';
import styles from './Appointment.module.css';
import { Link } from 'react-router-dom';

export default function Appointment(){
    return(
        <> 
            <h3 className={styles.title}>Check up</h3>
            <div className={styles.box}>
                <div className={styles.leftColumn}>
                    <div className={styles.hospitalPictureContainer}>
                        <img className={styles.hospitalPicture} src='http://media.bizj.us/view/img/6038891/maintower-newfacade-rendering*1200xx732-412-0-69.jpg' alt='St. Vincent Hospital'/>
                    </div>
                </div>
                <div className={styles.rightColumn}>
                    <div className={styles.buttonsContainer}>
                        <Link to='/details' className={styles.button}>DETAILS</Link>
                        <Link tp='details' className={styles.button}>TRANSPORT</Link>
                    </div>
                </div>
               <h3 className={styles.date}>Tomorrow</h3>
            </div>
        </>
    )
}
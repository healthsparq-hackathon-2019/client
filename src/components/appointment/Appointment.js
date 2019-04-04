import React from 'react';
import styles from './Appointment.module.css';

export default function Appointment(){
    return(
        <>
            <div className={styles.box}>
                <div className={styles.leftColumn}>
                    <div className={styles.hospitalPictureContainer}>
                        <img className={styles.hospitalPicture} src='http://media.bizj.us/view/img/6038891/maintower-newfacade-rendering*1200xx732-412-0-69.jpg' alt='St. Vincent Hospital'/>
                    </div>
                </div>
                
                <div className={styles.rightColumn}>
                    <div className={styles.buttonsContainer}>
                        <button className={styles.button}>Details</button>
                        <button className={styles.button}>Transport</button>
                    </div>
                </div>
            </div>
        </>
    )
}
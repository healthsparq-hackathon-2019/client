import React, { PureComponent } from 'react';
import styles from './Appointment.module.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class Appointment extends PureComponent {
    static propTypes = {
        appointment: PropTypes.object.isRequired
    }
    render() {
        const { appointment } = this.props;
        return (
            <> 
                <h3 className={styles.title}>{appointment.title}</h3>
                <div className={styles.box}>
                    <div className={styles.leftColumn}>
                        <div className={styles.hospitalPictureContainer}>
                            <img className={styles.hospitalPicture} src={appointment.img} alt='St. Vincent Hospital'/>
                        </div>
                    </div>
                    <div className={styles.rightColumn}>
                        <div className={styles.buttonsContainer}>
                            <Link to='/details' className={styles.button}>DETAILS</Link>
                            <a href="https://dazzling-heisenberg-414dd5.netlify.com/" className={styles.button}>TRANSPORT</a>
                        </div>
                    </div>
                   <h3 className={styles.date}>{appointment.date}</h3>
                </div>
            </>
        )
    }
}
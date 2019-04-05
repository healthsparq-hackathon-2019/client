import React from 'react';
import styles from './Footer.module.css';
import { FaGithub } from 'react-icons/fa';

export default function Footer(){
    return(
        <>
            <div className={styles.footerBox}>
                    <a href="https://github.com/healthsparq-hackathon-2019/client"><FaGithub className={styles.githublogo}/></a>
                
            </div>
        </>
    )
}
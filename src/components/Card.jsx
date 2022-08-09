import React from 'react';
import  styles from "./Card.module.css";
const Card = ({img, title, subtitle, desc}) => {
    return (
        <div className={styles.card}>
            <img src={img} alt=''/>
            <div className={styles.cardInfo}>
                <h5>{title}</h5>
                <h5>{subtitle}</h5>
                <p>{desc}</p>
            </div>
        </div>
    );
}

export default Card;

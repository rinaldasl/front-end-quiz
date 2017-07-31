import React from 'react';
import styles from './order-buttons.css';

export default OrderButtons;

function OrderButtons(props) {
    return (
        <div className={styles.orderButtons}>
            <div className={styles.button}>
                PURCHASE
            </div>
            <div className={styles.button}>
                MAKE OFFER
            </div>
        </div>
    );
}

import React from 'react';
import styles from './header.css';
import { Link } from 'react-router-dom'

export default Header;

function Header(props) {
    return (
        <div className={styles.header}>
            {props.isItemPage ? (
                <Link className={styles.backLink} to="/">&#60; Home</Link>
            ) : (
                <span>Browse page</span>
            )}
            {props.logoUrl &&
                <img src={props.logoUrl} />
            }
        </div>
    );
}

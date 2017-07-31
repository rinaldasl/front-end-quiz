import React from 'react'
import styles  from './button-rounded.css'

export default ButtonRounded;

function ButtonRounded(props) {
    return (
        <div className={styles.button}>
            <button type={props.type}
                    onClick={props.onClick}>
                {props.children}
            </button>
        </div>
    );
}

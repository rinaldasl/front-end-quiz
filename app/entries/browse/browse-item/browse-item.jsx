import React from 'react';
import styles from './browse-item.css';
import { Link } from 'react-router-dom';
import Favorite from '../../favorite';

export default BrowseItem;

function BrowseItem(props) {
    return (
        <div className={styles.item}>
            <Link to={`/item/${props.item.id}`}>
                <img src={props.item.image} />
            </Link>
            <div className={styles.footer}>
                {props.item.price ? (
                    props.item.price
                ) : (
                    <span>Price Upon Request</span>
                )}
                <Favorite id={props.item.id} />
            </div>
        </div>
    );
}

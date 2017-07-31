import React from 'react';
import { connect } from 'react-redux';
import styles from './favorite.css';
import HeartIcon from '-!babel!svg-react-loader!styles/icons/heart.svg';
import { toggle } from 'actions/action-favorites';

function Favorite(props) {
    return (
        <div className={styles.favorite}>
            <HeartIcon
                className={props.checked ? styles.checked : null}
                onClick={props.toggle} />
        </div>
    );
}

function mapStateToProps(state, ownProps) {
    const { ids = [] } = state.favorites;
    return {
        checked: ids.includes(ownProps.id)
    };
}

function mapDispathToProps(dispatch, ownProps) {
    return {
        toggle: () => dispatch(toggle(ownProps.id))
    };
}

export default connect(
    mapStateToProps,
    mapDispathToProps
)(Favorite);

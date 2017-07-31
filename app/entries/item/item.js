import React from 'react';
import styles from './item.css';
import { connect } from 'react-redux';
import Favorite from '../favorite';
import OrderButtons from './order-buttons';
import { getItemById, destroy } from 'actions/action-item';

class Item extends React.Component {
    componentDidMount() {
        this.props.getItemById(this.props.id);
    }

    componentWillUnmount() {
        this.props.destroyState();
    }

    render() {
        return (
            <div className={styles.item}>
                {this.props.item.loading ? (
                    <span>Loading...</span>
                ) : (
                    <div className={styles.content}>
                        <ImageContainer item={this.props.item} />
                        <div className={styles.rightSide}>
                            <MainContainer item={this.props.item} />
                            <DescriptionContainer item={this.props.item} />
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { item } = state;
    return { item };
}

function mapDispathToProps(dispatch) {
    return {
        getItemById: id => dispatch(getItemById(id)),
        destroyState: () => dispatch(destroy())
    };
}

export default connect(
    mapStateToProps,
    mapDispathToProps
)(Item);

function ImageContainer(props) {
    return (
        <div className={styles.imageContainer}>
            <Favorite id={props.item.id} />
            <img src={props.item.image} />
        </div>
    );
}

function MainContainer(props) {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.mainContainerText}>
                <h1>{props.item.title}</h1>
                <div className={styles.price}>
                    {props.item.price ? (
                        props.item.price
                    ) : (
                        <span>Price Upon Request</span>
                    )}
                </div>
                <div className={styles.title}>Measurements:</div>
                <div>{props.item.measurements}</div>
            </div>
            <OrderButtons />
        </div>
    );
}

function DescriptionContainer(props) {
    return (
        <div className={styles.descriptionContainer}>
            <p>{props.item.description}</p>
            <p>
                <span className={styles.title}>Creator:</span> {props.item.creators}
            </p>
        </div>
    );
}

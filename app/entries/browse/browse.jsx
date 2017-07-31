import _ from 'lodash';
import React from 'react';
import styles from './browse.css';
import BrowseItem from './browse-item';
import ButtonRounded from 'ui-components/buttons/button-rounded';
import { connect } from 'react-redux';
import { getItems, destroy } from 'actions/action-browse';

class Browse extends React.Component {
    componentDidMount() {
        this.loadMore();
    }

    componentWillUnmount() {
        this.props.destroyState();
    }

    loadMore = () => {
        const { getItems, items } = this.props;
        getItems(_.size(items));
    }

    isLoadMoreButtonVisible = () => {
        const { items, totalItems } = this.props;
        const isNextChunk = () => totalItems - _.size(items) > 0;

        return !this.props.loading && isNextChunk();
    }

    render() {
        return (
            <div className={styles.browse}>
                <div className={styles.itemsContainer}>
                    {this.props.items.map(item =>
                        <BrowseItem key={item.id}
                                    item={item} />
                    )}
                </div>
                {this.isLoadMoreButtonVisible() &&
                    <ButtonRounded onClick={this.loadMore}>
                        LOAD MORE
                    </ButtonRounded>
                }
                {this.props.loading &&
                    <div className={styles.loading}>Loading...</div>
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { items, loading, totalItems } = state.browse;
    return { items, loading, totalItems };
}

function mapDispathToProps(dispatch) {
    return {
        getItems: start => dispatch(getItems(start)),
        destroyState: () => dispatch(destroy())
    };
}

export default connect(
    mapStateToProps,
    mapDispathToProps
)(Browse);

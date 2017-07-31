import _ from 'lodash';
import React from 'react';
import styles from './styles/app.css'
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import service from './services/service';
import Header from './ui-components/header'
import Browse from './entries/browse';
import Item from './entries/item';

function Layout(props) {
    return (
        <BrowserRouter>
            <div className={styles.app}>
                <Header isItemPage={props.isItemPage} logoUrl={props.logoUrl} />
                <Route exact path="/" component={Browse}/>
                <Route path="/item/:id" render={({ match }) => (
                    <Item id={match.params.id} />
                )}/>
            </div>
        </BrowserRouter>
    );
}

function mapStateToProps(state) {
    const { id, seller } = state.item;
    return {
        isItemPage: !!id,
        logoUrl: seller
            ? service.getUrl('resources', _.get(seller, 'logoUrl'))
            : null
    };
}

export default connect(
    mapStateToProps
)(Layout);

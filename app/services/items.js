import _ from 'lodash';
import axios from 'axios';
import service from './service';

export default {
    fetchItems,
    fetchItemById
}

function fetchItems(start) {
    const url = service.getUrl('browse', 'data');

    return axios.get(url, { params: { start } })
        .then(res => res.data)
        .then(toResponse);

    function toResponse(data) {
        return {
            items: _.map(data.items, toListEntity),
            totalItems: data.totalItems
        }
    }
}

function fetchItemById(id) {
    const url = service.getUrl('item', `${id}/data`);

    return axios.get(url)
        .then(res => res.data)
        .then(toEntity);
}

function toListEntity(data) {
    return {
        id: data.integerId,
        image: data.image,
        price: _.get(data, 'price.amounts.USD')
    }
}

function toEntity(data) {
    return {
        id: data.integerId,
        image: data.image,
        title: data.title,
        price: _.get(data, 'price.amounts.USD'),
        measurements: _.get(data, 'measurements.display'),
        description: data.description,
        creators: data.creators,
        seller: {
            company: _.get(data, 'seller.company'),
            logoUrl: _.get(data, 'seller.logo')
        },
    }
}

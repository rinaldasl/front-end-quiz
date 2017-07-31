import _ from 'lodash';

export default {
    getUrl
};

const endpoints = process.env.ENDPOINTS;

/**
 * Get endpoint url
 * @param {string} name
 * @param {string} url
 * @returns {string}
 */
function getUrl(name, url) {
    const servicePath = getEndpoint(name);
    if (!_.isNil(servicePath)) {
        return `${servicePath}/${url}`;
    } else {
        throw new Error(`service#getUrl failed to get ${name} service path!`);
    }
}

/**
 * @param {string} name
 */
function getEndpoint(name) {
    return _.get(endpoints, name);
}

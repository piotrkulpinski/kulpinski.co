'use strict';

/**
 *  home controller
 */

const schema = require('../content-types/home/schema.json');
const createPopulatedController = require('../../../helpers/populate');

module.exports = createPopulatedController('api::home.home', schema);

'use strict';

/**
 *  error404 controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::error404.error404');

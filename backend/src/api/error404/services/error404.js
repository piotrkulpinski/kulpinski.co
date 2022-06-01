'use strict';

/**
 * error404 service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::error404.error404');

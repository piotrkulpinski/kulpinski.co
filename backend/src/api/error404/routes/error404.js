'use strict';

/**
 * error404 router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::error404.error404');

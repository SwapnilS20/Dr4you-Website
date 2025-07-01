'use strict';

/**
 * repeated-component router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::repeated-component.repeated-component');

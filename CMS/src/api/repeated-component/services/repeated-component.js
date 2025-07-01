'use strict';

/**
 * repeated-component service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::repeated-component.repeated-component');

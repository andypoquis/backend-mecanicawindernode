'use strict';

/**
 * client-service service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::client-service.client-service');

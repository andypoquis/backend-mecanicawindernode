'use strict';

/**
 *  client-service controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::client-service.client-service');

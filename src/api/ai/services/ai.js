'use strict';

/**
 * ai service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::ai.ai');

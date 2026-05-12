'use strict';

module.exports = {
  register({ strapi }) {
    strapi.server.app.proxy = true;
  },

  async bootstrap({ /*{ strapi }*/ }) {
  
  },
};


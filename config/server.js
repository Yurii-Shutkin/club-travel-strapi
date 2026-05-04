module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('STRAPI_URL', 'https://club-travel-strapi.onrender.com'), 
  proxy: true,
  app: {
    keys: env.array('APP_KEYS'),
    settings: {
      proxy: true,
    },
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});

module.exports = [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'global::force-https',
    resolve: (config, { strapi }) => {
      return async (ctx, next) => {
        if (ctx.request.header['x-forwarded-proto'] === 'https') {
          ctx.request.secure = true;
        }
        await next();
      };
    },
  },
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': ["'self'", 'data:', 'blob:', 'res.cloudinary.com'],
          'media-src': ["'self'", 'data:', 'blob:', 'res.cloudinary.com'],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::favicon',
  'strapi::public',
  {
    name: 'strapi::session',
    config: {
      cookie: {
        secure: false, 
        sameSite: 'lax',
        httpOnly: true,
      },
    },
  },
];

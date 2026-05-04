module.exports = [
 (ctx, next) => {
    if (ctx.request.header['x-forwarded-proto'] === 'https') {
      ctx.request.secure = true;
    }
    return next();
  },
  'strapi::logger',
  'strapi::errors',
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

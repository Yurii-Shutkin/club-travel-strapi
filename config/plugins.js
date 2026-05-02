module.exports = ({ env }) => ({
   upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  'users-permissions': {
    config: {
      providers: {
        google: {
          enabled: true,
          icon: 'google',
          subdomain: '', 
          clientId: env('GOOGLE_CLIENT_ID'), 
          clientSecret: env('GOOGLE_CLIENT_SECRET'), 
          callback: `${env('STRAPI_URL')}/api/auth/google/callback`,
        },
      },
    },
  },
});

const path = require('path');

module.exports = ({ env }) => {
  const databaseUrl = env('DATABASE_URL');

  // Если мы на Render (есть DATABASE_URL), используем Postgres
  if (databaseUrl) {
    return {
      connection: {
        client: 'postgres',
        connection: {
          connectionString: databaseUrl,
          ssl: {
            rejectUnauthorized: false, // Нужно для Neon
          },
        },
        pool: { min: 2, max: 10 },
      },
    };
  }

  // Если мы локально, используем твои настройки Postgres из .env или дефолтные
  return {
    connection: {
      client: 'postgres', // Явно ставим postgres вместо sqlite
      connection: {
        host: env('DATABASE_HOST', '127.0.0.1'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'club_travel_strapi'),
        user: env('DATABASE_USERNAME', 'admin'),
        password: env('DATABASE_PASSWORD', ''),
        ssl: env.bool('DATABASE_SSL', false),
      },
      pool: { min: 2, max: 10 },
    },
  };
};

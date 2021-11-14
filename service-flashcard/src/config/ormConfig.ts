export function ormConfig(): any {
  return {
    type: process.env.DATABASE_TYPE,
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT),
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    synchronize: true,
    logging: false,
    autoLoadEntities: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    connectTimeout: Number(process.env.DATABASE_CONNECT_TIMEOUT),
    acquireTimeout: Number(process.env.DATABASE_ACQUIRE_TIMEOUT),
    extra: {
      connectionLimit: Number(process.env.DATABASE_CONNECTION_LIMIT),
    },
    entities: [`dist/**/entity/*.entity.js`],
    migrations: [`dist/database/migrations/*.js`],
    subscribers: [`dist/database/subscriber/*.subscriber.js`],
    cli: {
      entitiesDir: `src/**/entity`,
      migrationsDir: `src/database/migrations`,
      subscribersDir: `src/database/subscriber`,
    },
  };
}

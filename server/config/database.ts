import * as dotenv from 'dotenv';
dotenv.config();

export default {
  type: 'mysql',
  host: process.env.HOST,
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  name: process.env.DATABASE,
  port: +process.env.EXPRESS_PORT,
  logging: process.env.TYPEORM_LOGGING === 'true',
  entities: [__dirname + '/**/*.entity{.ts,.js}'], // process.env.TYPEORM_ENTITIES.split(','),
  // migrationsRun: process.env.TYPEORM_MIGRATIONS_RUN === 'true',
  synchronize: process.env.TYPEORM_SYNCHRONIZE === 'true',
};

import { Config } from '@src/config';
import knex, { Knex } from 'knex';

export type DatabaseClient = Knex;

export function createDatabaseClient(config: Config): DatabaseClient {
  return knex({
    client: 'postgresql',
    connection: {
      user: config.database?.user,
      password: config.database?.password,
      host: config.database?.host,
      port: parseInt(config.database?.port ?? ''),
    },
  });
}

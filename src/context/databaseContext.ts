import { Config } from '@src/config';
import {
  createDatabaseClient,
  DatabaseClient,
} from '@src/database/databaseClient';

export type DatabaseContext = {
  client: DatabaseClient | undefined;
};

export function createDatabaseContext(config: Config): DatabaseContext {
  return {
    client: config.database ? createDatabaseClient(config) : undefined,
  };
}

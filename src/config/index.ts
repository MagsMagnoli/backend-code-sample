import { databaseConfig, DatabaseConfig } from './databaseConfig';
import { serverConfig } from './serverConfig';

export type Config = {
  server: {
    port: number;
  };
  database: DatabaseConfig | undefined;
};

export function createConfig(): Config {
  return {
    server: serverConfig(),
    database: databaseConfig(),
  };
}

import { Config } from '@src/config';
import { DatabaseConfig } from '@src/config/databaseConfig';
import { ServerConfig } from '@src/config/serverConfig';

export function stubDatabaseConfig({
  user = 'username',
  password = 'password',
  database = 'database',
  port = 'port',
  host = 'host',
} = {}): DatabaseConfig {
  return {
    user,
    password,
    database,
    host,
    port,
  };
}

export function stubServerConfig({ port = 3000 } = {}): ServerConfig {
  return {
    port,
  };
}

export function stubConfig({
  database = stubDatabaseConfig(),
  server = stubServerConfig(),
} = {}): Config {
  return {
    database,
    server,
  };
}

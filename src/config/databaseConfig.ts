export type DatabaseConfig = {
  user: string;
  password: string;
  host: string;
  port: string;
  database: string;
};

export function databaseConfig(): DatabaseConfig | undefined {
  let database: DatabaseConfig | undefined;

  const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_DATABASE } = process.env;

  if (DB_USER && DB_PASSWORD && DB_HOST && DB_PORT && DB_DATABASE) {
    database = {
      user: DB_USER,
      password: DB_PASSWORD,
      host: DB_HOST,
      port: DB_PORT,
      database: DB_DATABASE,
    };
  }

  return database;
}

import { Config } from '@src/config';
import { createDatabaseContext, DatabaseContext } from './databaseContext';
import { createTasksContext, TasksContext } from './tasksContext';

export type Context = {
  config: Config;
  database: DatabaseContext;
  tasks: TasksContext;
};

export function createContext(config: Config): Context {
  const database = createDatabaseContext(config);
  const tasks = createTasksContext(database);

  return {
    config,
    database,
    tasks,
  };
}

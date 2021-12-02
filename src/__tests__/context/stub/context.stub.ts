import { Context } from '@src/context';
import { DatabaseContext } from '@src/context/databaseContext';
import { TasksContext } from '@src/context/tasksContext';
import { stubConfig } from '@src/__tests__/config/__stub__/config.stub';

export function stubDatabaseContext({
  client = undefined,
} = {}): DatabaseContext {
  return {
    client,
  };
}

export function stubTasksContext({
  getTasksOperation = jest.fn(),
} = {}): TasksContext {
  return {
    getTasksOperation,
  };
}

export function stubContext({
  config = stubConfig(),
  database = stubDatabaseContext(),
  tasks = stubTasksContext(),
} = {}): Context {
  return {
    config,
    database,
    tasks,
  };
}

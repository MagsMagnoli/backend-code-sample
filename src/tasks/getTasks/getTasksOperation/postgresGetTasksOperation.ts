import { PostgresObject } from '@src/types';
import { DatabaseClient } from '@src/database/databaseClient';
import { Task } from '@src/tasks/task';
import { GetTasksOperation } from './index';

type PostgresTask = PostgresObject<Task>;

export function postgresGetTasksOperation(
  databaseClient: DatabaseClient,
): GetTasksOperation {
  return async () => {
    const tasks = await databaseClient<PostgresTask>('tasks');
    return tasks.map(taskFromPostgresTask);
  };
}

export function taskFromPostgresTask(postgresTask: PostgresTask): Task {
  const { id, title, description, status } = postgresTask;

  return {
    id,
    title,
    description,
    status,
  };
}

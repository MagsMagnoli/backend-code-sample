import { getMemoryDatabase } from '@src/database/memoryDatabase';
import { GetTasksOperation } from '@src/tasks/getTasks/getTasksOperation';
import { inMemoryGetTasksOperation } from '@src/tasks/getTasks/getTasksOperation/inMemoryGetTasksOperation';
import { postgresGetTasksOperation } from '@src/tasks/getTasks/getTasksOperation/postgresGetTasksOperation';
import { DatabaseContext } from './databaseContext';

export type TasksContext = {
  getTasksOperation: GetTasksOperation;
};

export function createTasksContext(ctx: DatabaseContext): TasksContext {
  return {
    getTasksOperation: ctx.client
      ? postgresGetTasksOperation(ctx.client)
      : inMemoryGetTasksOperation(getMemoryDatabase()),
  };
}

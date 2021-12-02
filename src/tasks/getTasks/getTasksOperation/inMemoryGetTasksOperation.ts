import { MemoryDatabase } from '@src/database/memoryDatabase';
import { GetTasksOperation } from './index';

export function inMemoryGetTasksOperation(
  database: MemoryDatabase,
): GetTasksOperation {
  return async () => database.tasks;
}

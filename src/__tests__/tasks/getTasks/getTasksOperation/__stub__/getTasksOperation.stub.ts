import { GetTasksOperation } from '@src/tasks/getTasks/getTasksOperation';
import { Task } from '@src/tasks/task';

export function getTasksOperationStub(tasks: Task[] = []): GetTasksOperation {
  return async () => {
    return tasks;
  };
}

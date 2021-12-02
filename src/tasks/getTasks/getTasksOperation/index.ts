import { Task } from '@src/tasks/task';

export type GetTasksOperation = () => Promise<Task[]>;

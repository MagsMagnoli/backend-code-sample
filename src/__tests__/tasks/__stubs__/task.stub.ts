import { Task, TaskStatus } from '@src/tasks/task';

export function stubTask({
  id = 'id',
  title = 'title',
  description = 'description',
  status = TaskStatus.ToDo,
} = {}): Task {
  return {
    id,
    title,
    description,
    status,
  };
}

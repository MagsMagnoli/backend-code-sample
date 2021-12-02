import { Task, TaskStatus } from '@src/tasks/task';

export type MemoryDatabase = {
  tasks: Task[];
};

let memoryDatabase: MemoryDatabase;

export function getMemoryDatabase(): MemoryDatabase {
  return (memoryDatabase = memoryDatabase ?? {
    tasks: [
      {
        id: '1',
        title: 'Task 1',
        description: 'Task 1 description',
        status: TaskStatus.ToDo,
      },
      {
        id: '2',
        title: 'Task 2',
        description: 'Task 2 description',
        status: TaskStatus.Doing,
      },
      {
        id: '3',
        title: 'Task 3',
        description: 'Task 3 description',
        status: TaskStatus.Done,
      },
    ],
  });
}

/**
 * An enumeration of the possible task statuses
 * */
export enum TaskStatus {
  /**
   * The task has not been started yet
   */
  ToDo = 'todo',

  /**
   * The task is in progress
   */
  Doing = 'doing',

  /**
   * The task is completed
   */
  Done = 'done',
}

/**
 * Defines an object that contains information about a task.
 */
export type Task = {
  /**
   * The unique identifier of the task.
   */
  id: string;

  /**
   * The title of the task.
   */
  title: string;

  /**
   * The description of the task.
   */
  description: string;

  /**
   * The current status of the task.
   */
  status: TaskStatus;
};

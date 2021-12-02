import { getTasksHandler } from '@src/tasks/getTasks/getTasksHandler';
import { Task } from '@src/tasks/task';
import { stubContext } from '@src/__tests__/context/__stub__/context.stub';
import { stubTask } from '@src/__tests__/tasks/__stubs__/task.stub';
import { getTasksOperationStub } from './getTasksOperation/__stub__/getTasksOperation.stub';

describe('getTasksHandler', () => {
  it('should fetch tasks from an external source', async () => {
    const ctx = stubContext();
    const res = { send: jest.fn() };
    const expected: Task[] = [stubTask()];

    ctx.tasks.getTasksOperation = getTasksOperationStub(expected);

    // in future we can create helpers to stub req and res
    await getTasksHandler(ctx)({} as any, res as any);

    expect(res.send).toHaveBeenCalledWith({ data: expected });
  });
});

import { Context } from '@src/context';
import { RequestHandler } from '@src/server/asyncWrapper';

export function getTasksHandler(ctx: Context): RequestHandler {
  return async (_req, res) => {
    const tasks = await ctx.tasks.getTasksOperation();
    return res.send({ data: tasks });
  };
}

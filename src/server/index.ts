import { Context } from '@src/context';
import { getTasksHandler } from '@src/tasks/getTasks/getTasksHandler';
import * as express from 'express';
import * as http from 'http';
import { asyncHandler } from './asyncWrapper';

export async function createServeer(ctx: Context): Promise<http.Server> {
  const app = express();

  app.use(express.json());

  app.disable('x-powered-by');

  app.use('/api/tasks', asyncHandler(getTasksHandler(ctx)));

  return http.createServer(app);
}

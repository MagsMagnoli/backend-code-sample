import { NextFunction, Request, Response } from 'express';

export type RequestHandler = (
  req: Request,
  res: Response,
) => Promise<Response | void>;

export function asyncHandler(fn: RequestHandler) {
  return async (req: Request, res: Response, next: NextFunction) =>
    fn(req, res).catch(next);
}

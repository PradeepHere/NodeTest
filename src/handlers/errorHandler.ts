import { Request, Response, NextFunction } from 'express';

export function apiErrorHandler(
  err: any,
  req: Request,
  res: Response,
  message: string,
) {
  const error: object = { Message: message, Request: req, Stack: err };
  res.json({ Message: message });
}

import { Request, Response, NextFunction } from 'express';
import { RequestValidationError } from '../errors/RequestValidationError';
import { DatabaseConnectionError } from '../errors/DatabaseConnetionError';

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof RequestValidationError) {
    console.log('Request validation error');
  }

  if (err instanceof DatabaseConnectionError) {
    console.log('DB connection error');
  }
  res.status(400).send({ message: err.message });
};
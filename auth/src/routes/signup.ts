import express, { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import { RequestValidationError } from '../errors/RequestValidationError';
import { DatabaseConnectionError } from '../errors/DatabaseConnetionError';

const router = express.Router();

router.post('/api/users/signup', [
  body('email').isEmail().withMessage('email is not valid'),
  body('password').trim().isLength({ min: 4, max: 20 }).withMessage('password should be between 4 and 20')
], (req: Request, res: Response) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    throw new RequestValidationError(errors.array());
  }
  const { email, password } = req.body;

  console.log(`Created user with ${email}`);

  throw new DatabaseConnectionError();

  res.json({});
});

export { router as signupRouter };
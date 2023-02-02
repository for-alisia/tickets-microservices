import express from 'express';

const router = express.Router();

router.post('/api/users/signup', (req, res) => {
  const { email, password } = req.body;

  if (!email || typeof email !== 'string') {
    res.status(400).send('Provide a valid email');
  }
  res.send('Sign in service');
});

export { router as signupRouter };
import express from 'express';

const router = express.Router();

router.post('/api/users/signup', (req, res) => {
  const { email, password } = req.body;
  res.send('Sign in service');
});

export { router as signupRouter };
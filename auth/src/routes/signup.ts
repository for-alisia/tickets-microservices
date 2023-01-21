import express from 'express';

const router = express.Router();

router.post('/api/users/signup', (req, res) => {
  res.send('Signin here!');
});

export { router as signupRouter };
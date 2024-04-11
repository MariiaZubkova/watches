import express from 'express';
import { Watch } from '../../db/models';

const router = express.Router();

router.get('/', async (req, res) => {
  const watch = await Watch.findAll();
  const initState = { watch };
  res.render('MainPage', initState);
});

export default router;

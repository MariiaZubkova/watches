import express from 'express';
import { Order } from '../../db/models';

const router = express.Router();

router.get('/', async (req, res) => {
  const ress = await Order.findAll();
  res.render('MainPage', { ress });
});

export default router;

import express from 'express';
import { Order } from '../../db/models';

const router = express.Router();

router.post('/', async (rec, res) => {
  const resuju = await Order.create({ ...rec.body, userId: res.locals.user?.id });
  res.status(201).json(resuju);
});

export default router;

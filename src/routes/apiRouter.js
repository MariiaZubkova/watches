import express from 'express';
import { Order, Watch, User } from '../../db/models';

const mailer = require('../Mailer');

const router = express.Router();

router.post('/', async (rec, res) => {
  const resuju = await Order.create({ ...rec.body, userId: res.locals.user?.id });
  const { email } = await User.findOne({ where: { id: res.locals.user?.id } });
  await mailer(email);
  res.status(201).json(resuju);
});

router.post('/watch', async (req, res) => {
  const response = await Watch.create({ ...req.body });
  res.status(200).json(response);
});

router.delete('/:id', async (rec, res) => {
  const { id } = rec.params;
  console.log('idd backend', id);
  const destroy = await Watch.destroy({ where: { id } });
  res.status(200).json(destroy);
});

export default router;

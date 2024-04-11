import express from 'express';
import { Order } from '../../../db/models';

const router = express.Router();

router.post('/:id', async (req, res) => {
  await Order.destroy({ where: { id: req.params.id } });
  res.sendStatus(200);
});

export default router;

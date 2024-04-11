import express from 'express';
import { Order, Watch } from '../../db/models';

const router = express.Router();

router.get('/', (req, res) => {
  const initState = { hello: 'world' };
  res.render('OrderPage', initState);
router.get('/', async (req, res) => {
  const request = await Order.findAll();
  const watch = await Watch.findAll();
  const initState = { request, watch };
  res.render('MainPage', initState);
});

export default router;
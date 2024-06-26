import express from 'express';
import { Order, Watch, Watch } from '../../db/models';

const router = express.Router();
router.get('/', async (req, res) => {
  const request = await Order.findAll();
  const watch = await Watch.findAll();
  const initState = { request, watch };
  res.render('MainPage', initState);
});
export default router;

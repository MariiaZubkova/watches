import express from 'express';
import { Order, Watch } from '../../db/models';
import OrdersPage from '../components/pages/OrdersPage';

const router = express.Router();

router.get('/', async (req, res) => {
  const request = await Order.findAll();
  const watch = await Watch.findAll();
  const initState = { request, watch };
  res.render('MainPage', initState);
});

router.get('/user/signup', async (req, res) => {
  res.render('AuthPage');
});

router.get('/user/login', async (req, res) => {
  res.render('LoginPage');
});

router.get('/orders', async (req, res) => {
  res.render('Orders');
});

router.get('/pricing', async (req, res) => {
  const request = await Order.findAll();
  const initState = { request };
  res.render('OrdersPage', initState);
});

export default router;

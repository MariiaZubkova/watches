import jwt from 'jsonwebtoken';
import 'dotenv/config';
import jwtConfig from '../config/jwtConfig';

const generateToken = (payload) => ({
  accessToken: jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: jwtConfig.access.expiresIn.toString(),
  }),
  refreshToken: jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: jwtConfig.refresh.expiresIn.toString(),
  }),
});

export default generateToken;

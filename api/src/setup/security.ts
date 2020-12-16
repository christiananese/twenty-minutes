import { INestApplication } from '@nestjs/common';
import * as helmet from 'helmet';
import * as rateLimit from 'express-rate-limit';

const RATE_LIMIT_MAX: number = +process.env.RATE_LIMIT_MAX || 10000;

export const setupSecurity = (app: INestApplication) => {
  // added helmet
  app.use(helmet());
  // rateLimit
  app.use(
    rateLimit({
      windowMs: 1000 * 60 * 60, // an hour
      max: RATE_LIMIT_MAX, // limit each IP
      message: 'Too many request created from this IP',
    }),
  );
};

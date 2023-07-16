import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';

import { router } from './routes/loginRoutes';
import './controllers/LoginController';

import { AppRotuer } from './AppRouter';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['lskdas'] }));
app.use(router);
app.use(AppRotuer.getInstance());

app.listen(3000, () => {
  console.log('Listening on port: 3000');
});

import { Request, Response, NextFunction } from 'express';

import { controller, get, use } from './decorators';

function requireAtuh(req: Request, res: Response, next: NextFunction): void {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  }

  res.status(403).send('Not permitted');
}

@controller('')
class RootController {
  @get('/')
  getRoot(req: Request, res: Response) {
    if (req.session && req.session.loggedIn) {
      res.send(`
      <section>
        <h1>You are logged in</h1>
        <a href='/auth/logout'>Logout</a>
      </section>
    `);
    } else {
      res.send(`
      <section>
        <h1>You are not logged in</h1>
        <a href='/auth/login'>Login</a>
      </section>
    `);
    }
  }

  @get('/protected')
  @use(requireAtuh)
  getProtected(req: Request, res: Response) {
    res.send('Welcome to protected route, logged in user!');
  }
}

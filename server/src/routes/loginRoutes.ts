import { Router, Request, Response, NextFunction } from 'express';

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

function requireAtuh(req: Request, res: Response, next: NextFunction): void {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  }

  res.status(403).send('Not permitted');
}

const router = Router();

router.post('/login', (req: RequestWithBody, res: Response) => {
  const body = req.body;
  const email = body?.email;
  const password = body?.password;

  if (email && password && email === 'hi@hi.com' && password === 'pass') {
    // mark this person logged in
    req.session = { loggedIn: true };
    // redirect them to the root route
    res.redirect('/');
  } else {
    res.send('Invalid email or password');
  }
});

router.get('/', (req: Request, res: Response) => {
  if (req.session && req.session.loggedIn) {
    res.send(`
      <section>
        <h1>You are logged in</h1>
        <a href='/logout'>Logout</a>
      </section>
    `);
  } else {
    res.send(`
      <section>
        <h1>You are not logged in</h1>
        <a href='/login'>Login</a>
      </section>
    `);
  }
});

router.get('/logout', (req: Request, res: Response) => {
  req.session = undefined;
  res.redirect('/');
});

router.get('/protected', requireAtuh, (req: Request, res: Response) => {
  res.send('Welcome to protected route, logged in user!');
});

export { router };

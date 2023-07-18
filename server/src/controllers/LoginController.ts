import { NextFunction, Request, Response } from 'express';
import { get, controller, use, post, bodyValidator } from './decorators';

function logger(req: Request, res: Response, next: NextFunction) {
  console.log('Hello, sr. Middleware');
  next();
}

@controller('/auth')
class LoginController {
  @get('/login')
  @use(logger)
  getLogin(req: Request, res: Response): void {
    res.send(`
      <form method="POST">
        <div>
          <label for="email">Email</label>
          <input name="email" />
        </div>
        <div>
          <label for="password">Password</label>
          <input name="password" type="password" />
        </div>
        <button>submit</button>
      </form>
    `);
  }

  @post('/login')
  @bodyValidator('email', 'password')
  postLogin(req: Request, res: Response) {
    const body = req.body;
    const email = body?.email;
    const password = body?.password;

    if (email === 'hi@hi.com' && password === 'pass') {
      // mark this person logged in
      req.session = { loggedIn: true };
      // redirect them to the root route
      res.redirect('/');
    } else {
      res.send('Invalid email or password');
    }
  }

  @get('/logout')
  getLogout(req: Request, res: Response) {
    req.session = undefined;
    res.redirect('/');
  }
}

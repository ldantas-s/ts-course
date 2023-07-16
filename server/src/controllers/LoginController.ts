import { NextFunction, Request, Response } from 'express';
import { get, controller, use } from './decorators';

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
}

import 'reflect-metadata';
import { AppRotuer } from '../../AppRouter';

export function controller(routePrefix: string) {
  return function (target: Function) {
    const router = AppRotuer.getInstance();
    for (let key in target.prototype) {
      const routeHandler = target.prototype[key];
      const path = Reflect.getMetadata('path', target.prototype, key);

      if (path) {
        router.get(`${routePrefix}${path}`, routeHandler);
      }
    }
  };
}

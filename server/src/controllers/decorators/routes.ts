import 'reflect-metadata';

import { RequestHandler } from 'express';

import { Methods } from './Methods';
import { MetadataKeys } from './MetadataKeys';

interface RouterHandlerDescriptor extends PropertyDescriptor {
  value?: RequestHandler;
}

function routerBinder(method: keyof typeof Methods) {
  return function (path: string) {
    return function (
      target: any,
      key: string,
      descriptor: RouterHandlerDescriptor
    ) {
      Reflect.defineMetadata(MetadataKeys.path, path, target, key);
      Reflect.defineMetadata(MetadataKeys.method, method, target, key);
    };
  };
}

export const get = routerBinder('get');
export const post = routerBinder('post');
export const del = routerBinder('delete');
export const put = routerBinder('put');
export const patch = routerBinder('patch');

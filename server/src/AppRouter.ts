import express from 'express';

export class AppRotuer {
  private static instance: express.Router;

  static getInstance(): express.Router {
    if (!AppRotuer.instance) {
      AppRotuer.instance = express.Router();
    }

    return AppRotuer.instance;
  }
}


import * as express from "express";

// tslint:disable:variable-name
export function post(req: express.Request, res: express.Response) {
  res.send('Hello from Regie');
}
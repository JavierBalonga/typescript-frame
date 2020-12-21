import { Application } from 'express';

import exampleUser from './api/controllers/exampleUser/router';

export default function routes(app: Application): void {
  app.use('/api/v1/exampleUser', exampleUser);
}

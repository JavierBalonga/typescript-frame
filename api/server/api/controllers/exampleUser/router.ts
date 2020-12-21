import express, { Request, Response, NextFunction } from 'express';
import controller from './controller';

export default express
  .Router()
  .get('/', (req: Request, res: Response, next: NextFunction): void => {
    controller
      .read()
      .then((r) => res.status(200).send(r))
      .catch(next);
  })
  .post('/', (req: Request, res: Response, next: NextFunction): void => {
    const { firstName, lastName } = req.body;
    if (!firstName)
      return next(
        new Error('The body must have a firstName to create a exampleUser')
      );
    if (!lastName)
      return next(
        new Error('The body must have a lastName to create a exampleUser')
      );
    controller
      .create({ firstName, lastName })
      .then((r) => res.status(200).send(r))
      .catch(next);
  })
  .put('/', (req: Request, res: Response, next: NextFunction): void => {
    const { id, firstName, lastName } = req.body;
    if (!id)
      return next(new Error('The body must have a id to update a exampleUser'));
    if (!firstName)
      return next(
        new Error('The body must have a firstName to update a exampleUser')
      );
    if (!lastName)
      return next(
        new Error('The body must have a lastName to update a exampleUser')
      );
    controller
      .update(id, { firstName, lastName })
      .then((r) => res.status(200).send(r))
      .catch(next);
  })
  .delete('/', (req: Request, res: Response, next: NextFunction): void => {
    const { id } = req.body;
    if (!id)
      return next(new Error('The body must have a id to delete a exampleUser'));
    controller
      .delete(id)
      .then((r) => res.status(200).send(r))
      .catch(next);
  });

import 'mocha';
import { expect } from 'chai';
import request from 'supertest';
import Server from '../../server';
import db from '../../server/models';

describe('DELETE /api/v1/exampleUser/', () => {
  it('should update a example user', () =>
    request(Server)
      .delete('/api/v1/exampleUser')
      .send({ id: 2 })
      .expect('Content-Type', /json/)
      .then((r) => {
        expect(r.body).to.be.an('array').that.is.not.empty;
        return db.ExampleUser.findByPk(2);
      })
      .then((user) => {
        expect(user).to.does.not.exist;
      }));

  afterEach(() =>
    db.ExampleUser.create({ id: 2, firstName: 'John', lastName: 'Doe' })
  );
});

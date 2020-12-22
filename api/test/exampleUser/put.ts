import 'mocha';
import { expect } from 'chai';
import request from 'supertest';
import Server from '../../server';
import db from '../../server/models';

describe('PUT /api/v1/exampleUser/', () => {
  it('should update a example user', () =>
    request(Server)
      .put('/api/v1/exampleUser')
      .send({ id: 2, firstName: 'test', lastName: 'user' })
      .expect('Content-Type', /json/)
      .then((r) => {
        expect(r.body).to.be.an('array').that.is.not.empty;
        return db.ExampleUser.findByPk(2);
      })
      .then((user) => {
        expect(user.firstName).to.be.equal('test');
        expect(user.lastName).to.be.equal('user');
      }));
});

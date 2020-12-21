import 'mocha';
import { expect } from 'chai';
import request from 'supertest';
import Server from '../../server';
import db from '../../server/models';

describe('POST /api/v1/exampleUser/', () => {
  it('should add a new example user', () =>
    request(Server)
      .post('/api/v1/exampleUser')
      .send({ firstName: 'test', lastName: 'user' })
      .expect('Content-Type', /json/)
      .then((r) => {
        console.log(r.body)
        expect(r.body).to.be.an('array').that.is.not.empty;
        return db.ExampleUser.findOne({
          where: { firstName: 'test', lastName: 'user' },
        });
      })
      .then((user) => {
        expect(user.firstName).to.be.equal('test');
        expect(user.lastName).to.be.equal('user');
      }));

  after(() =>
    db.ExampleUser.destroy({ where: { firstName: 'test', lastName: 'user' } })
  );
});

import 'mocha';
import { expect } from 'chai';
import request from 'supertest';
import Server from '../../server';

describe('GET /api/v1/exampleUser/', () => {
  it('should get all example users', () =>
    request(Server)
      .get('/api/v1/exampleUser')
      .expect('Content-Type', /json/)
      .then((r) => {
        expect(r.body).to.be.an('array').that.is.not.empty;
      }));
});

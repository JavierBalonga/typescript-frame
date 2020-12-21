import 'mocha';
import { expect } from 'chai';
import request from 'supertest';
import Server from '../../server';
import db from '../../server/models';

describe('GET /api/v1/exampleUser/', () => {
  beforeEach(() => {
    // ...
  });

  it('should get all example users', () =>
    request(Server)
      .get('/api/v1/exampleUser')
      .expect('Content-Type', /json/)
      .then((r) => {
        console.log(r.body);
      }));

  afterEach(() => {
    // ...
  });
});

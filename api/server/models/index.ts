// @ts-nocheck
// /* eslint-disable */
import Sequelize from 'sequelize';

import { url as DB_URL } from '../../db/config.cjs';
import ExampleUser from './ExampleUser.model';

interface DB {
  sequelize: any;
  Sequelize: any;
  ExampleUser: any;
  // ...
}

// Set up Sequelize connection
const sequelize = new Sequelize(DB_URL, {
  define: {
    underscored: true,
  },
  // TODO: log with pino
  logging: false,
});

// Create all models...
const db: DB = {
  ExampleUser: ExampleUser(sequelize),
  // ...
};

// ...and all associations
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;

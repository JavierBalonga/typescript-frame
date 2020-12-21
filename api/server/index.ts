import './common/env';
import Server from './common/server';
import routes from './routes';
import db from './models';

const setUpDatabase = (): Promise<void> => {
  return db.sequelize.sync({ force: process.env.DB_FORCE_SYNC === 'true' });
};
setUpDatabase();

const port = process.env.PORT ? parseInt(process.env.PORT) : 3001;

export default new Server().router(routes).listen(port);

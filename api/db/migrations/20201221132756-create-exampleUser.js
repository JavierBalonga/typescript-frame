'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .createTable('example_users', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        first_name: {
          type: Sequelize.STRING,
        },
        last_name: {
          type: Sequelize.STRING,
        },
        created_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updated_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      })
      .then(() =>
        queryInterface.bulkInsert(
          'example_users',
          [
            {
              id: 1,
              first_name: 'admin',
              last_name: 'admin',
              created_at: new Date(),
              updated_at: new Date(),
            },
          ],
          { returning: true }
        )
      )
      .then((r) =>
        queryInterface.sequelize.query(
          `ALTER SEQUENCE example_users_id_seq RESTART WITH ${r.length + 1}`
        )
      );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('example_users');
  },
};

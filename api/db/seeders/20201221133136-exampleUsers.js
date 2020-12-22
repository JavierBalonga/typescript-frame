'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .bulkInsert(
        'example_users',
        [
          {
            id: 2,
            first_name: 'John',
            last_name: 'Doe',
            created_at: new Date(),
            updated_at: new Date(),
          },
          {
            id: 3,
            first_name: 'Mary',
            last_name: 'Gant',
            created_at: new Date(),
            updated_at: new Date(),
          },
        ],
        { returning: true }
      )
      .then((r) =>
        queryInterface.sequelize.query(
          `ALTER SEQUENCE example_users_id_seq RESTART WITH ${r.length + 2}`
        )
      );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('example_users', null, {});
  },
};

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /* console.log("database:", queryInterface.sequelize.options.database) */
    return queryInterface.bulkInsert(
      'example_users',
      [
        {
          id: 1,
          first_name: 'John',
          last_name: 'Doe',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          first_name: 'Mary',
          last_name: 'Gant',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    )
    .catch(console.log);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('example_users', null, {});
  },
};

'use strict';
const { Model, DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  class ExampleUser extends Model {
    static associate(models) {
      // associations...
    }
  }
  ExampleUser.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'example_user',
    }
  );
  return ExampleUser;
};

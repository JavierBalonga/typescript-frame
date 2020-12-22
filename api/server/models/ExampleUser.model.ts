'use strict';
import { Model, DataTypes } from 'sequelize';

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

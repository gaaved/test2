'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasOne(models.Role, {
        foreignKey: 'userId',
        as: 'roles',
      });
      this.hasOne(models.Department, {
        foreignKey: 'userId',
        as: 'department',
      });
      this.hasMany(models.Comment, {
        foreignKey: 'userId',
        as: 'comment',
      });
    }
  }
  User.init({
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    imageName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
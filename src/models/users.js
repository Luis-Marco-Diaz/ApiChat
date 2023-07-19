'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association (relaciones) here
      Users.hasMany(models.Conversations, { foreingkey: 'createdBy'});
      Users.hasMany(models.Messages, {foreingkey: 'senderId'});
      Users.hasMany(models.Participants, {foreignKey: 'usersId'});
    }
  }
  Users.init({
    firtsname: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    profileImage: DataTypes.STRING,
    validEmail: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};
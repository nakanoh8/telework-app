'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserMsAccount extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  UserMsAccount.init({
    user_id: DataTypes.INTEGER,
    msteams_member_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'UserMsAccount',
    tableName: 'UserMsAccounts',
    underscored: true,
  });
  return UserMsAccount;
};

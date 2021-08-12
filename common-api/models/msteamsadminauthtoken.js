'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MsTeamsAdminAuthtoken extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  MsTeamsAdminAuthtoken.init({
    msteams_accesstoken: DataTypes.STRING,
    msteams_refreshtoken: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'MsTeamsAdminAuthtoken',
    tableName: 'MsTeamsAdminAuthtokens',
    underscored: true,
  });
  return MsTeamsAdminAuthtoken;
};

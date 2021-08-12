'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserProjectConfig extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  UserProjectConfig.init({
    user_id: DataTypes.INTEGER,
    project_id: DataTypes.INTEGER,
    start_notification: DataTypes.STRING,
    end_notification: DataTypes.STRING,
    notification_interval: DataTypes.INTEGER,
    deadline: DataTypes.INTEGER,
    is_enabled_notification: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'UserProjectConfig',
    tableName: 'UserProjectConfigs',
    underscored: true,
  });
  return UserProjectConfig;
};

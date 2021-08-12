'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Status extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Status.init({
    user_id: DataTypes.INTEGER,
    project_id: DataTypes.INTEGER,
    status_no: DataTypes.INTEGER,
    message_content: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Status',
    tableName: 'Statuses',
    underscored: true,
  });
  return Status;
};

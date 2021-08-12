'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MsTeamsProject extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  MsTeamsProject.init({
    projest_id: DataTypes.INTEGER,
    msteams_channel_url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'MsTeamsProject',
    tableName: 'MsTeamsProjects',
    underscored: true,
  });
  return MsTeamsProject;
};

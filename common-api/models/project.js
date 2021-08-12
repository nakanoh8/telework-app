'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Project.init({
    project_name: DataTypes.STRING,
    project_no: DataTypes.INTEGER,
    chat_system_id: DataTypes.INTEGER,
    meeting_system_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Project',
    tableName: 'Projects',
    underscored: true,
  });
  return Project;
};

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Organization extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Organization.init({
    parent_organization_id: DataTypes.INTEGER,
    organization_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Organization',
    tableName: 'Organizations',
    underscored: true,
  });
  return Organization;
};

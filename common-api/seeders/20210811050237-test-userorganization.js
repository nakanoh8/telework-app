'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const now = new Date();
    return queryInterface.bulkInsert('UserOrganizations', [
      { user_id: 1,  organization_id: 2, created_at: now, updated_at: now},
      { user_id: 2,  organization_id: 2, created_at: now, updated_at: now},
      { user_id: 3,  organization_id: 1, created_at: now, updated_at: now},
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('UserOrganizations', null, {});
  }
};

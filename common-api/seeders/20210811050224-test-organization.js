'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const now = new Date();
    return queryInterface.bulkInsert('Organizations', [
      { id: 1, parent_organization_id: -1,  organization_name: 'ICTソリューション本部', created_at: now, updated_at: now},
      { id: 2, parent_organization_id: 1,  organization_name: '業務管理室', created_at: now, updated_at: now}
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Organizations', null, {});
  }
};

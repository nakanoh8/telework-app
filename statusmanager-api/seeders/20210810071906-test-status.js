'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const now = new Date();
    return queryInterface.bulkInsert('Statuses', [
      { user_id: 1,  project_id: 1, status_no: 1, created_at: now, updated_at: now},
      { user_id: 1,  project_id: 1, status_no: 2, created_at: now, updated_at: now}
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Statuses', null, {});
  }
};

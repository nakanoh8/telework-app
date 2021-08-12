'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const now = new Date();
    return queryInterface.bulkInsert('UserProjectConfigs', [
      { project_id: 1, start_notification: '9:00', end_notification: '17:30', notification_interval: 120, deadline: 30, is_enabled_notification: true, created_at: now, updated_at: now},
      { project_id: 2, start_notification: '9:30', end_notification: '18:00', notification_interval: 180, deadline: 20, is_enabled_notification: true, created_at: now, updated_at: now}
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('UserProjectConfigs', null, {});
  }
};

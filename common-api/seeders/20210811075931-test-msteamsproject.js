'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const now = new Date();
    return queryInterface.bulkInsert('MsTeamsProjects', [
      { projest_id: 1, msteams_channel_url: 'msteams_channel_url_1', created_at: now, updated_at: now},
      { projest_id: 2, msteams_channel_url: 'msteams_channel_url_2', created_at: now, updated_at: now},
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('MsTeamsProjects', null, {});
  }
};

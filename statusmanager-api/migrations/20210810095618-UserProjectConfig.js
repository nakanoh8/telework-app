'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('UserProjectConfigs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        defaultValue: null,
        type: Sequelize.INTEGER
      },
      project_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      start_notification: {
        defaultValue: '9:00',
        type: Sequelize.STRING
      },
      end_notification: {
        defaultValue: '17:30',
        type: Sequelize.STRING
      },
      notification_interval: {
        defaultValue: 120,
        type: Sequelize.INTEGER
      },
      deadline: {
        defaultValue: 30,
        type: Sequelize.INTEGER
      },
      is_enabled_notification: {
        defaultValue: true,
        type: Sequelize.BOOLEAN
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }, {
      // ここで複合ユニークキーの情報を記載する
      // fields の部分に複合ユニークキーとして設定したいフィールドを含める
      // ２つ以上設定することも可
      uniqueKeys: {
          UsersWorkspacesIndex: {
              fields: ['user_id', 'project_id']
          }
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('UserProjectConfigs');
  }
};

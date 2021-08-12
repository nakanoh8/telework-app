module.exports = function(app) {

    const userProjectConfigService = require('../services/userProjectConfigService');

    // ユーザごとの設定情報取得
    app.get('/api/statusmanager/userprojectconfig/:project_id', userProjectConfigService.findAll);
};

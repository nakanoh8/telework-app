module.exports = function(app) {

    const statusService = require("../services/statusService");

    // ProjectIDからプロジェクトメンバ状態情報のリストを取得
    app.get('/api/statusmanager/statuses/:project_id', statusService.findAll);
};

module.exports = function(app) {

  const msTeamsAdminAuthtokenService = require('../services/msTeamsAdminAuthtokenService');

  // IDからデータをMsTeams管理者トークン情報を取得
  app.get('/api/common/msTeamsAdminAuthtokens/:id', msTeamsAdminAuthtokenService.findByPk);
  // MsTeams管理者トークン情報を更新
  app.post('/api/common/msTeamsAdminAuthtokens/:id', msTeamsAdminAuthtokenService.update);
};

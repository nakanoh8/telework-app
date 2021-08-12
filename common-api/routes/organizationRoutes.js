module.exports = function(app) {

  const organizationService = require('../services/organizationService');

  // 全組織のフルネームを取得
  // 組織フルネーム例：ICTソリューション本部/業務管理室/技術開発G
  // app.get('/api/common/organizations/fullname', organizationService.findAllOrgFullName);
  // ユーザごとの所属組織のフルネームを取得
  // 組織フルネーム例：ICTソリューション本部/業務管理室/技術開発G
  // app.post('/api/common/organizations/fullname/:user_id', organizationService.findAllOrgFullNameByUserId);
};

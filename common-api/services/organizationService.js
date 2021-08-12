const db = require('../models/index.js');
const Organization = db.Organization;
const UserOrganization = db.UserOrganization;

module.exports = {
  // 全組織のフルネームを取得
  // 組織フルネーム例：ICTソリューション本部/業務管理室/技術開発G
  findAllOrgFullName() {
    // TODO 実装
  },
  // ユーザごとの所属組織のフルネームを取得
  // 組織フルネーム例：ICTソリューション本部/業務管理室/技術開発G
  findAllOrgFullNameByUserId() {
    // TODO 実装
  }

  // 全組織情報のリストを取得
  // findAll(req, res) {
  //   Organization.findAll()
  //   .then(skills => {
  //     res.send(skills);
  //   })
  //   .catch(err => {
  //     console.log(err)
  //   });
  // },
  // UserIDから組織情報のリストを取得
  // findAllByUserId(req, res) {
  //   UserOrganization.findAll({
  //     where: {
  //       user_id: req.params.user_id
  //     }
  //   })
  //   .then(userOrganizations => {
  //     // TODO 組織情報を返したい
  //     res.send(userOrganizations);
  //   })
  //   .catch(err => {
  //     console.log(err)
  //   });
  // }
}

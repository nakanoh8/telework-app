const db = require('../models/index.js');
const User = db.User;

module.exports = {
  // IDからユーザ情報を取得
  findByPk(req, res) {
    User.findByPk(req.params.id)
    .then(user => {
      // console.log("😃", user)
      res.send(user);
    })
    .catch(err => {
      console.log(err)
    });
  },
  // IDのリストからユーザ情報のリストを取得
  findAllById(req, res) {
    User.findAll({
      where: {
        id: req.body.user_ids
      }
    })
    .then(users => {
      res.send(users);
    })
    .catch(err => {
      console.log(err)
    });
  },
  // 全ユーザ情報のリストを取得
  findAll(req, res) {
    User.findAll()
    .then(users => {
      res.send(users);
    })
    .catch(err => {
      console.log(err)
    });
  },
  // ProjectIDからユーザ情報のリストを取得する（プロジェクトメンバ状態一覧表示用）
  findAllByProjectId(req, res) {
    // TODO 実装
  },
  // SkillID・OrganizationIDのリストからユーザ情報のリストを取得する（回答者検索用）
  findAllBySkillIdAndOrgId(req, res) {
    // TODO 実装
  }
}

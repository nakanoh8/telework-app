const db = require('../models/index.js');
const Skill = db.Skill;
const UserSkill = db.UserSkill;

module.exports = {
  // 全技術情報を取得
  findAll(req, res) {
    Skill.findAll()
    .then(skills => {
      res.send(skills);
    })
    .catch(err => {
      console.log(err)
    });
  },
  // UserIDから技術情報のリストを取得
  findAllByUserId(req, res) {
    UserSkill.findAll({
      where: {
        user_id: req.params.user_id
      }
    })
    .then(userSkills => {
      // TODO 技術情報を返すように変更
      res.send(userSkills);
    })
    .catch(err => {
      console.log(err)
    });
  }
}

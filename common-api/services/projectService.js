const db = require('../models/index.js');
const Project = db.Project;
const UserProject = db.UserProject;

module.exports = {
  // UserIDからプロジェクト情報のリストを取得
  findAllByUserId(req, res) {
    UserProject.findAll({
      where: {
        user_id: req.params.user_id
      }
    })
    .then(userProjects => {
      // TODO プロジェクト情報を返すように変更
      res.send(userProjects);
    })
    .catch(err => {
      console.log(err)
    });
  }
}

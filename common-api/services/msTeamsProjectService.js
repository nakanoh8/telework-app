const db = require('../models/index.js');
const MsTeamsProject = db.MsTeamsProject;

module.exports = {
  // ProjectIDからTeamsプロジェクト情報を取得
  findOneByProjectId(req, res) {
    MsTeamsProject.findOne({
      where: {
        projest_id: req.params.project_id
      }
    })
    .then(msTeamsProject => {
      res.send(msTeamsProject);
    })
    .catch(err => {
      console.log(err)
    });
  }
}

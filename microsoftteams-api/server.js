'use strict';

const express = require('express');

// Constants
const PORT = 9000;
const HOST = '0.0.0.0';

// App
const app = express();
// body-parserを設定する
app.use(express.json())

// Routeのインポート
const microsoftteamsRoutes = require("./routes/microsoftteamsRoutes");
//appにRouteを設定する
microsoftteamsRoutes(app);

app.get('/', (req, res) => {
  res.send('Hba360 MicrosoftTeams Api');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

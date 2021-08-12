'use strict';

const express = require('express');

// Constants
const PORT_HTTP = 8020;
const PORT_WS = 8021;
const HOST = '0.0.0.0';
// App
const app = express();
// body-parserを設定する
app.use(express.json())

// Routeのインポート
const userProjectConfigRoutes = require("./routes/userProjectConfigRoutes");
const statusRoutes = require("./routes/statusRoutes");
//appにRouteを設定する
userProjectConfigRoutes(app);
statusRoutes(app);

app.get('/', (req, res) => {
  res.send('Hba360 Statusmanager Api');
});
app.listen(PORT_HTTP, HOST);
console.log(`Running on http://${HOST}:${PORT_HTTP}`);

/*
  以下、WebSocket関連処理
  */
const WebSocket = require('ws');
const statusService = require("./services/statusService");
const StringDecoder = require("string_decoder").StringDecoder;

const wss = new WebSocket.Server({ port: PORT_WS });
// クライアントのリスト
let CLIENTS = [];
let id;
// Buffer->String変換に使用
const decoder = new StringDecoder();

wss.on('connection', function connection(ws) {
  id = Math.floor(Math.random() * 999999999);
  console.log('新しいクライアント： ' + id);
  ws.send('WebSocketサーバに接続しました');
  // クライアントを登録
  CLIENTS.push(ws);

  ws.on('message', function incoming(msg) {
    try {
      // メッセージをパース
      const msgStr = decoder.write(msg);
      const { type, payload } = JSON.parse(msgStr);
      // typeに応じた処理
      switch (type) {
        case 'post-status': {
          // プロジェクトメンバ状態情報を登録
          statusService.create(ws, payload);
          // 他の接続しているクライアントにメッセージを一斉送信
          _pushUpdatedStatusForAllClient(ws);
        }
      }
    } catch (e) {
      // 異常応答
      ws.send(e);
    }
  });
  ws.on('close', function() {
    console.log('ユーザー：' + id + ' がブラウザを閉じました');
    delete CLIENTS[id];
  });
});

// 他の接続しているクライアントにメッセージを一斉送信
function _pushUpdatedStatusForAllClient(ws){
  for (let j=0; j < CLIENTS.length; j++) {
    if(ws !== CLIENTS[j]) {
      CLIENTS[j].send(JSON.stringify({type: 'updated-status'}));
    }
  }
}

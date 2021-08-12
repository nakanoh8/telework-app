## 共通API（common-api）
・必要なコンテナを起動する
docker-compose up -d common-api db
・common-apiコンテナに入る
docker-compose exec common-api bash

-- コンテナ内操作 --
・依存パッケージをインストールする（初回と他メンバがpackage.jsonを更新した場合に随時）
npm install
・サーバを起動する（API動作確認時）
npm start
・コンテナを抜ける（コンテナ再起動時、作業終了時）
exit
------------------
・コンテナを停止する（コンテナ再起動時、作業終了時）
docker-compose down

### API仕様について
・API仕様書にAPIの詳細を記載
・状態管理APIは、http://localhost:8020/api/common/を含むURL

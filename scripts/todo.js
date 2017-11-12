// Description:
//   TODO を管理することができるボットです
// Commands:
//   ボット名 todo     - TODO を作成
//   ボット名 done     - TODO を完了にする
//   ボット名 del      - TODO を消す
//   ボット名 list     - TODO の一覧表示
//   ボット名 donelist - 完了した TODO の一覧表示
'use strict';
const todo = require('todo');
module.exports = (robot) => {
	//respond関数botの名前が一緒に呼び出された時に反応する関数　
	//正規表現でtodoのあとに１スペースおいて何らかの文字列がはいってる iは大文字でも小文字でもマッチする
	//.が改行文字以外の一文字にもマッチする文字であり+は直前の文字の一回以上の繰り返しにマッチする
	//()はグループ
	robot.respond(/todo (.+)/i, (msg) => {
		const task = msg.match[1].trim();
		todo.todo(task);
		msg.send('追加しました:' + task);
	});
	robot.respond(/done (.+)/i, (msg) => {
		const task = msg.match[1].trim();
		todo.done(task);
		msg.send('完了にしました:' + task);
	});
	robot.respond(/del (.+)/i, (msg) => {
		const task = msg.match[1].tirm();
		todo.del(task);
		msg.send('削除しました:' + task);
	});
	//join関数は配列のすべての要素を与えられた文字列でつなげて１つの文字列にする関数
	robot.respond(/list/i,(msg) => {
		msg.send(todo.list().join('\n'));
	});
	robot.respond(/donelist/i,(msg) =>{
		msg.send(todo.list().join('\n'));
	});
};
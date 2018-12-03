const app = require('express')();
const http = require('http').Server(app);
const mariadb = require('mariadb');
const connection = mariadb.createConnection({
	user: 'root',
	password: 'secret',
	database: 'chat'
});

connection
	// connected
	.then(conn => {
		console.log('Coonnected!');
		conn.query('SELECT *').then(rows => {
			console.log(rows);
		});
	})
	// not connected
	.catch(err => {
		console.log('Something went wrong: ', err);
	});
http.listen(3000);

const mariadb = require('mariadb');
mariadb
	.createConnection({
		user: 'root',
		password: 'secret',
		database: 'chat'
	})
	.then(conn => {
		console.log('connected ! connection id is ' + conn.threadId);
	});

var moment = require('moment');
var mysql = require('mysql');

module.exports = {
	myFunction : function(myvar){
		return myvar + 1;
	},
	testDate: function(){
		return moment().format();
	},
	connectDataBase: function(){
		var connection = mysql.createConnection({
		  host     : 'localhost',
		  user     : 'root',
		  password : 'nguyennghia',
		  database : 'test'
		});
		connection.connect();

		var x = null;
		var query = connection.query('SELECT * FROM user', function(err, rows, fields) {
		  	if (err) throw err;
		  	x = rows;
		  	console.log(x);
		});
		for (var i = 0; i < 50000; i++) {
			console.log(i);
		}
		return x;
	}
}
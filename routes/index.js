var express = require('express');
var router = express.Router();
var mycontroller = require('../controllers/index.controller')

/* GET home page. */
router.get('/', function(req, res, next) {
	var x = mycontroller.myFunction(2);
	var y = mycontroller.testDate();
	var z = mycontroller.connectDataBase();
  	res.render('index', { 
  		title: x,
  		date : z
  	});
});

module.exports = router;

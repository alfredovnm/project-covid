const consulta = require('./funciones');
const express = require ('express');
const router = express.Router();

router.get('/',(req,res) => {
	res.render('index.html')
});

router.get('/index',(req,res) => {
	res.render('index.html')
});

router.get('/casos',(req,res) => {
	res.render('casos.html')
});
router.get('/historial',(req,res) => {
	res.render('historial.html')
});
router.get('/vacunas',(req,res) => {
	res.render('vacunas.html')
});


module.exports = router;
var express = require('express');
var router = express.Router();
var lenguajesModel= require('../../models/lenguajesModel');
/* GET home page. */
router.get('/', async function(req, res, next) {

var lenguajes = await lenguajesModel.getLenguajes();

  res.render('admin/novedades', 
  {layout:'admin/layout',
   usuario: req.session.nombre,
   lenguajes
});
});
module.exports=router;
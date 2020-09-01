const express = require('express')
const router = express.Router();
const tiendaController = require('../controllers/tiendaController')

/* GET home page. */
router.get('/', tiendaController.tienda);
router.get('/carrito', tiendaController.carrito)
 
module.exports = router
const express = require('express');
const router = express.Router();

const clientesController = require('../controllers/clientesController');

router.get('/listar',clientesController.getClientes);
router.post('/guardar',clientesController.postCliente);
router.put('/modificar',clientesController.putCliente);
router.delete('/borrar',clientesController.deleteCliente);

module.exports = router;


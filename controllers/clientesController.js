const clientes = require("../model/clientes");

const getClientes = (req, res) => {
  res.json(clientes);
};

const getClienteById = (req, res) => {};

const postCliente = (req, res) => {};

const putCliente = (req, res) => {};

const deleteCliente = (req, res) => {};

module.exports = {
  getClienteById,
  getClientes,
  postCliente,
  putCliente,
  deleteCliente,
};

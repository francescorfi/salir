"use strict";

const salir = require('../dao/salir-dao');

module.exports = class salirController {
  static getAll(req, res) {
    salirDAO
      .getAll()
      .then(salir => res.status(200).json(salirs))
      .catch(error => res.status(400).json(error));
  }

  static createNew(req, res) {
    let _salir = req.body;

    salirDAO
      .createNew(_salir)
      .then(salir => res.status(201).json(salir))
      .catch(error => res.status(400).json(error));
  }

  static removeById(req, res) {
    let _id = req.params.id;

    salirDAO
      .removeById(_id)
      .then(() => res.status(200).end())
      .catch(error => res.status(400).json(error));
  }
}

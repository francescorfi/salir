"use strict";

const list = require('../dao/list-dao');

module.exports = class listController {
  static getAll(req, res) {
    listDAO
      .getAll()
      .then(list => res.status(200).json(lists))
      .catch(error => res.status(400).json(error));
  }

  static createNew(req, res) {
    let _list = req.body;

    listDAO
      .createNew(_list)
      .then(list => res.status(201).json(list))
      .catch(error => res.status(400).json(error));
  }

  static removeById(req, res) {
    let _id = req.params.id;

    listDAO
      .removeById(_id)
      .then(() => res.status(200).end())
      .catch(error => res.status(400).json(error));
  }
}

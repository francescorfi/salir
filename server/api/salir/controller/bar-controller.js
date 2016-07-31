"use strict";

const bar = require('../dao/bar-dao');

module.exports = class barController {
  static getAll(req, res) {
    barDAO
      .getAll()
      .then(bar => res.status(200).json(bars))
      .catch(error => res.status(400).json(error));
  }

  static createNew(req, res) {
    let _bar = req.body;

    barDAO
      .createNew(_bar)
      .then(bar => res.status(201).json(bar))
      .catch(error => res.status(400).json(error));
  }

  static removeById(req, res) {
    let _id = req.params.id;

    barDAO
      .removeById(_id)
      .then(() => res.status(200).end())
      .catch(error => res.status(400).json(error));
  }
}

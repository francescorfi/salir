"use strict";

const mongoose = require('mongoose');
const Promise = require('bluebird');
const salirSchema = require('../model/salir-model');
const _ = require('lodash');

salirSchema.statics.getAll = () => {
  return new Promise((resolve, reject) => {
    let _query = {};

    salir
      .find(_query)
      .exec((err, todos) => {
        err ? reject(err)
          : resolve(todos);
      });
  });
}

salirSchema.statics.createNew = (salir) => {
  return new Promise((resolve, reject) => {
    if (!_.isObject(salir)) {
      return reject(new TypeError('Todo is not a valid object.'));
    }

    let _something = new salir(salir);

    _something.save((err, saved) => {
      err ? reject(err)
        : resolve(saved);
    });
  });
}

salirSchema.statics.removeById = (id) => {
  return new Promise((resolve, reject) => {
    if (!_.isString(id)) {
      return reject(new TypeError('Id is not a valid string.'));
    }

    salir
      .findByIdAndRemove(id)
      .exec((err, deleted) => {
        err ? reject(err)
          : resolve();
      });
  });
}

const salir = mongoose.model('salir', salirSchema);

module.exports = salir;

"use strict";

const mongoose = require('mongoose');
const Promise = require('bluebird');
const listSchema = require('../model/list-model');
const _ = require('lodash');

listSchema.statics.getAll = () => {
  return new Promise((resolve, reject) => {
    let _query = {};

    list
      .find(_query)
      .exec((err, todos) => {
        err ? reject(err)
          : resolve(todos);
      });
  });
}

listSchema.statics.createNew = (list) => {
  return new Promise((resolve, reject) => {
    if (!_.isObject(list)) {
      return reject(new TypeError('Todo is not a valid object.'));
    }

    let _something = new list(list);

    _something.save((err, saved) => {
      err ? reject(err)
        : resolve(saved);
    });
  });
}

listSchema.statics.removeById = (id) => {
  return new Promise((resolve, reject) => {
    if (!_.isString(id)) {
      return reject(new TypeError('Id is not a valid string.'));
    }

    list
      .findByIdAndRemove(id)
      .exec((err, deleted) => {
        err ? reject(err)
          : resolve();
      });
  });
}

const list = mongoose.model('list', listSchema);

module.exports = list;

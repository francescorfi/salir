"use strict";

const mongoose = require('mongoose');
const Promise = require('bluebird');
const barSchema = require('../model/bar-model');
const _ = require('lodash');

barSchema.statics.getAll = () => {
  return new Promise((resolve, reject) => {
    let _query = {};

    bar
      .find(_query)
      .exec((err, todos) => {
        err ? reject(err)
          : resolve(todos);
      });
  });
}

barSchema.statics.createNew = (bar) => {
  return new Promise((resolve, reject) => {
    if (!_.isObject(bar)) {
      return reject(new TypeError('Todo is not a valid object.'));
    }

    let _something = new bar(bar);

    _something.save((err, saved) => {
      err ? reject(err)
        : resolve(saved);
    });
  });
}

barSchema.statics.removeById = (id) => {
  return new Promise((resolve, reject) => {
    if (!_.isString(id)) {
      return reject(new TypeError('Id is not a valid string.'));
    }

    bar
      .findByIdAndRemove(id)
      .exec((err, deleted) => {
        err ? reject(err)
          : resolve();
      });
  });
}

const bar = mongoose.model('bar', barSchema);

module.exports = bar;

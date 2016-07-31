"use strict";

const mongoose = require('mongoose');
const barDAO = require(process.cwd() + '/server/api/salir/dao/bar-dao');
const expect = require('chai').expect;
const setupMongoose = require('../../_helpers/db').setupMongoose;

describe('barDAO', () => {
  before(() => {
    setupMongoose(mongoose);
  });

  afterEach(() => {
    barDAO.remove();
  })

  describe('getAll', () => {

  })

  describe('createNew', () => {

  })

  describe('removeById', () => {

  })
})

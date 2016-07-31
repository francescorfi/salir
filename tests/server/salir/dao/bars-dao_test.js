"use strict";

const mongoose = require('mongoose');
const barsDAO = require(process.cwd() + '/server/api/salir/dao/bars-dao');
const expect = require('chai').expect;
const setupMongoose = require('../../_helpers/db').setupMongoose;

describe('barsDAO', () => {
  before(() => {
    setupMongoose(mongoose);
  });

  afterEach(() => {
    barsDAO.remove();
  })

  describe('getAll', () => {

  })

  describe('createNew', () => {

  })

  describe('removeById', () => {

  })
})

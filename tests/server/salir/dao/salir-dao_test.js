"use strict";

const mongoose = require('mongoose');
const salirDAO = require(process.cwd() + '/server/api/salir/dao/salir-dao');
const expect = require('chai').expect;
const setupMongoose = require('../../_helpers/db').setupMongoose;

describe('salirDAO', () => {
  before(() => {
    setupMongoose(mongoose);
  });

  afterEach(() => {
    salirDAO.remove();
  })

  describe('getAll', () => {

  })

  describe('createNew', () => {

  })

  describe('removeById', () => {

  })
})

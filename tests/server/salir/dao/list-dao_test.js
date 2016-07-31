"use strict";

const mongoose = require('mongoose');
const listDAO = require(process.cwd() + '/server/api/salir/dao/list-dao');
const expect = require('chai').expect;
const setupMongoose = require('../../_helpers/db').setupMongoose;

describe('listDAO', () => {
  before(() => {
    setupMongoose(mongoose);
  });

  afterEach(() => {
    listDAO.remove();
  })

  describe('getAll', () => {

  })

  describe('createNew', () => {

  })

  describe('removeById', () => {

  })
})

var mongoose = require('mongoose');
var homepageDAO = require(process.cwd() + '/server/api/bcb/dao/homepage-dao');
var expect = require('chai').expect;
var setupMongoose = require('../../_helpers/db').setupMongoose;

describe('homepageDAO', () => {
  before(() => {
    setupMongoose(mongoose);
  });

  afterEach(() => {
    homepageDAO.remove();
  })

  describe('getAll', () => {

  })

  describe('createNew', () => {

  })

  describe('removeById', () => {

  })
})

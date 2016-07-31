"use strict";

const listController = require('../controller/list-controller');

module.exports = class listRoutes {
  static init(router) {
    router
      .route('/api/list')
      .get(listController.getAll)
      .post(listController.createNew);

    router
      .route('/api/list/:id')
      .delete(listController.removeById);
  }
}

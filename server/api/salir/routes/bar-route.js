"use strict";

const barController = require('../controller/bar-controller');

module.exports = class barRoutes {
  static init(router) {
    router
      .route('/api/bar')
      .get(barController.getAll)
      .post(barController.createNew);

    router
      .route('/api/bar/:id')
      .delete(barController.removeById);
  }
}

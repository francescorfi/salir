"use strict";

const salirController = require('../controller/salir-controller');

module.exports = class salirRoutes {
  static init(router) {
    router
      .route('/api/salir')
      .get(salirController.getAll)
      .post(salirController.createNew);

    router
      .route('/api/salir/:id')
      .delete(salirController.removeById);
  }
}

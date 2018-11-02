'use strict';
 module.exports = function(app) {
	 var controller = require('../controllers/empregadosController');

	 app.route('/api/empregados')
		 .get(controller.list)
		 .post(controller.create);

	  app.route('/api/empregados/:id')
		 .get(controller.read)
		 .put(controller.update)
		 .delete(controller.delete);
};
'use strict';
 var mongoose = require('mongoose');
 var Schema = mongoose.Schema; 

 var empregadosSchema = new Schema({}, { strict: false });

 module.exports = mongoose.model('empregados', empregadosSchema); 
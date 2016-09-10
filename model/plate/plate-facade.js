const Model = require('../../lib/facade');
const plateSchema  = require('./plate-schema');


class PlateModel extends Model {}

module.exports = new PlateModel(plateSchema);

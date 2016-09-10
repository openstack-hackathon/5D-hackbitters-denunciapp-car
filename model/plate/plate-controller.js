const Controller = require('../../lib/controller');
const userModel  = require('./plate-facade');


class PlateController extends Controller {}

module.exports = new PlateController(userModel);

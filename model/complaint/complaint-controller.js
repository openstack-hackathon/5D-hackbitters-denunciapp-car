const Controller = require('../../lib/controller');
const complaintModel  = require('./complaint-facade');


class ComplaintController extends Controller {}

module.exports = new ComplaintController(complaintModel);

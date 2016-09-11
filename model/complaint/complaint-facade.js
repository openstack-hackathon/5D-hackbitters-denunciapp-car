const Model = require('../../lib/facade');
const userSchema  = require('./complaint-schema');


class ComplaintModel extends Model {}

module.exports = new ComplaintModel(userSchema);

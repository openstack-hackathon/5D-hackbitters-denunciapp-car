const Controller = require('../../lib/controller');
const userModel  = require('./plate-facade');


class PlateController extends Controller {
  find(req, res, next) {
    return this.model.Schema
    .find(req.query)
    .sort('-createTime')
    .exec()
    .then(collection => res.status(200).json(collection))
    .catch(err => next(err));
  }

  create(req, res, next) {
    let body = req.body;

    // Parse unix date to timestamp date
    body.capturedTime = new Date(body.capturedTime);

    // Insert register
    this.model.create(body)
      .then(doc => res.status(201).json(doc))
      .catch(err => next(err));
  }
}

module.exports = new PlateController(userModel);

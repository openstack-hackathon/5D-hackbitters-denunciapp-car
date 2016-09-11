const Controller = require('../../lib/controller');
const userModel  = require('./plate-facade');
const complaintModel = require('../complaint/complaint-facade');


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
    const body = req.body;

    // Parse unix date to timestamp date
    body.capturedTime = new Date(body.capturedTime);

    // Insert register
    this.model.create(body)
      .then(plate => {
        // find complaint
        complaintModel.findOne({
          plate: plate.plate
        }, '-createTime')
          .then(complaint => {
            if (complaint !== null) {
              complaintModel.update({ _id: complaint._id }, {
                status: true,
                $pushAll: { snapshots: [plate._id] }
              })
              .then(doc => console.log(doc));
            }
          })
          .catch(err => next(err));

        res.status(201).json(plate);
      })
      .catch(err => res.status(400).json(err.errors));
  }
}

module.exports = new PlateController(userModel);

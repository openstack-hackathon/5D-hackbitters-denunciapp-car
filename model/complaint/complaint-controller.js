const Controller = require('../../lib/controller');
const complaintModel  = require('./complaint-facade');
const plateModel  = require('../plate/plate-facade');

class ComplaintController extends Controller {
  find(req, res, next) {
    return this.model.Schema
      .find(req.query)
      .sort('-createTime')
      .populate('snapshots')
      .exec()
      .then(collection => res.status(200).json(collection))
      .catch(err => next(err));
  }

  findById(req, res, next) {
    return this.model.Schema
      .findById(req.params.id)
      .populate('snapshots')
      .exec()
      .then(doc => {
        if (!doc) { return res.status(404).end(); }
        return res.status(200).json(doc);
      })
      .catch(err => next(err));
  }

  create(req, res, next) {
    const body = req.body;
    const plateReg = body.plate;
    const currentDate = new Date();

    // get time 30 minutes ago
    const dateRange = new Date(currentDate);
    dateRange.setMinutes(dateRange.getMinutes() - 30);

    // search de las caputured
    plateModel.findOne({
      plate: plateReg,
      createTime: { $gte: dateRange }
    }, '-createTime')
      .then(plate => {
        // if find the last captured set status to true
        if (plate !== null) {
          body.status = true;
          body.snapshots = [plate._id];
        }

        // create complaint
        this.model.create(body)
          .then(complaint => res.status(201).json(complaint))
          .catch(err => next(err));
      })
      .catch(err => next(err));
  }
}

module.exports = new ComplaintController(complaintModel);

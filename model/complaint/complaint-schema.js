const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');


const complaintSchema = new Schema({
  plate: { type: String, required: true, unique: true },
  status: { type:Boolean, default: false },
  createTime: { type: Date, default: Date.now },
  snapshots: [{
    type: Schema.Types.ObjectId,
    ref: 'Plate'
  }]
});

complaintSchema.plugin(uniqueValidator);


module.exports = mongoose.model('Complaint', complaintSchema);

const mongoose = require('mongoose');
const Schema   = mongoose.Schema;


const complaintSchema = new Schema({
  plate: { type: String, required: true },
  status: { type:Boolean, default: false },
  createTime: { type: Date, default: Date.now },
  snapshots: [{
    type: Schema.Types.ObjectId,
    ref: 'Plate'
  }]
});


module.exports = mongoose.model('Complaint', complaintSchema);

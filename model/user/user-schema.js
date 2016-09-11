const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName:  { type: String, required: true },
  plate: { type: String, required: true, unique: true },
  modelCar: { type: Number, required: true },
  brandCar: { type: String, required: true }
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);

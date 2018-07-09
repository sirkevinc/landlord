const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 11;

const LandlordModel = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  }
});

LandlordModel.pre('save', function(next) {
  bcrypt.hash(this.password, SALT_ROUNDS, (err, hash) => {
    if (err) return next(err);
    this.password = hash;
    next();
  });
});

LandlordModel.methods.checkPassword = function(plainTextPW, callBack) {
  bcrypt.compare(plainTextPW, this.password, (err, isMatch) => {
    if (err) return callBack(err);
    callBack(null, isMatch);
  });
};

module.exports = mongoose.model('Landlord', LandlordModel);
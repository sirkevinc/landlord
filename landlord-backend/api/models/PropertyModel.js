const mongoose = require('mongoose');

const PropertySchema = mongoose.Schema({
  address: {
    type: String,
    required: true,
  },
  unit: {
    type: String,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  pictures: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  renter_id: {
    type: ObjectId,
    ref: 'Tenant',
    required: true,
  },
  owner_id: {
    type: ObjectId,
    ref: 'Landlord',
    required: true,
  }
});

module.exports = mongoose.model('Property', PropertySchema, 'properties');
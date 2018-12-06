const mongoose = require('mongoose');

// Customer Schema
const CustomerSchema = mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    }, 
    address: {
        type: String,
        required: true
    }, 
    city: {
        type: String,
    }, 
    phone: {
        type: String
    }, 
    status: {
        type: String
    }
});

const Customer = module.exports = mongoose.model('Customer', CustomerSchema);

// Add new Customer function 
module.exports.addCustomer = function(newCustomer, callback) {
    newCustomer.save(callback);
}

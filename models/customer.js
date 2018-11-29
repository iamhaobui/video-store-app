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

// Insert initial admin Account
Customer.insertMany(
    [
        {fname: 'John', lname: 'Doe', address: '160 Kendal Ave', city: 'Toronto', phone: '647-546-2452', status: 'Available'},
        {fname: 'Geraldine', lname: 'Seydoux', address: '1078  René-Lévesque Blvd', city: 'Montreal', phone: '514-803-2673', status: 'Available'},
        {fname: 'Marie', lname: 'Curie', address: '2441 Burnt Island Road', city: 'Windermere', phone: '705-769-6588', status: 'Available'},
        {fname: 'Max', lname: 'Planck', address: '3554 Bank St', city: 'Ottawa', phone: '613-316-3567', status: 'Available'},
        {fname: 'Rosalind', lname: 'Franklin', address: '4621 Exmouth Street', city: 'Ontario', phone: '519-384-1205', status: 'Available'},
    ]
)

// Add new Customer function 
module.exports.addCustomer = function(newCustomer, callback) {
    newCustomer.save(callback);
}

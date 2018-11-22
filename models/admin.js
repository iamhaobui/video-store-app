const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// Admin Schema
const AdminSchema = mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        require: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String, 
        required: true
    }
});

const Admin = module.exports = mongoose.model('Admin', AdminSchema);

module.exports.getUserById = function(id, callback) {
    User.findById(id, callback);
}

module.exports.getUserByUsername = function(username, callback) {
    const query = {username: username};
    Admin.findOne(query, callback);
}

module.exports.addAdmin = function(newAdmin, callback) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newAdmin.password, salt, (err, hash) => {
            if (err) throw err;
            newAdmin.password = hash;
            newAdmin.save(callback); 
        })
    })
}
const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

const Admin = require('../models/admin');

// Register 
router.post('/register', (req, res, next) => {
    let newAdmin = new Admin({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });

    Admin.addAdmin(newAdmin, (err, admin) => {
        if (err) {
            res.json({success: false, msg: '  Failed to register admin user'});
        } else {
            res.json({success: true, msg: 'Admin user registered'});
        }
    })

});

// Authenticate 
router.post('/authenticate', (req, res, next) => {
    res.send('AUTHENTICATE');
});

// Validate 
router.get('/validate', (req, res, next) => {
    res.send('VALIDATE');
});

module.exports = router;
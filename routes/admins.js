const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
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
    const username = req.body.username;
    const password = req.body.password;

    Admin.getUserByUsername(username, (err, admin) => {
        if (err) throw err;
        if (!admin) {
            return res.json({success: false, msg: 'Admin User not found'});
        }

        Admin.comparePassword(password, admin.password, (err, isMatch) => {
            if (err) throw err;
            if (isMatch) {
                const token = jwt.sign(admin.toJSON(), config.secret, {
                    expiresIn: 604800 // 1 week
                });

                res.json({
                    success: true, 
                    token: 'JWT ' + token,
                    admin: {
                        id: admin._id, 
                        name: admin.name,
                        username: admin.username,
                        email: admin.email
                    }
                });
            } else {
                return res.json({success: false, msg: 'Wrong Password'});
            }
        })
    })
});

// Profile 
router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
    res.json({admin: req.user});
});

module.exports = router;
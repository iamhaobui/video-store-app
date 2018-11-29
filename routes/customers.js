const express = require('express');
const router = express.Router();
const Customer = require('../models/customer');

// Add Customer 
router.post('/add', (req, res, next) => {
    let newCustomer = new Customer({
        fname: req.body.fname,
        lname: req.body.lname,
        address: req.body.address,
        city: req.body.city,
        phone: req.body.phone,
        status: req.body.status
    });

    Customer.addCustomer(newCustomer, (err, customer) => {
        if (err) {
            res.json({success: false, msg: 'Failed to add a new customer'});
        } else {
            res.json({success: true, msg: 'New Customer added'});
        }
    }) 
});

// Get Customers 
router.get('/lists', (req, res) => {
    Customer.find({}, function(err, customers) {
        var customerMap = {};

        customers.forEach(function(customer) {
            customerMap[customer._id] = customer;
        });

        res.json({customerMap});
    });
});

// Delete Customer
router.delete('/delete/:id', function(req, res) {
    var id = req.params.id;
    Customer.findOneAndDelete({_id: id}, function(err, deletedObject) {
        if (err) {
            console.log(err);
            res.status(500).send();
        } else {
            res.json(deletedObject);
        }
    })
})

// Update Customer 
router.put('/update/:id', function(req, res) {
    var id = req.params.id;
    Customer.findOne({_id: id}, function(err, foundObject) {
        if (err) {
            console.log(err);
            res.status(500).send();
        } else {
            if(!foundObject) {
                res.status(404).send();
            } else {
                if (req.body.fname) {
                    foundObject.fname = req.body.fname;
                }

                if (req.body.lname) {
                    foundObject.lname = req.body.lname;
                }

                if (req.body.address) {
                    foundObject.address = req.body.address;
                }

                if (req.body.city) {
                    foundObject.city = req.body.city;
                }

                if (req.body.phone) {
                    foundObject.phone = req.body.phone;
                }

                if (req.body.status) {
                    foundObject.status = req.body.status;
                }

                foundObject.save(function(err, updatedObject) {
                    if (err) {
                        console.log(err);
                        res.status(500).send();
                    } else {
                        res.json(updatedObject);
                    }
                })
            }
        }
    })
})



module.exports = router;
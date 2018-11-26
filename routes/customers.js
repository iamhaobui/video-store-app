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

        res.json(customerMap);
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





module.exports = router;
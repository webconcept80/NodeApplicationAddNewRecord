const express = require('express');
const userRoute = express.Router();

let Users = require('../models/User');

userRoute.route('/users').get((req, res, next) => {
    Users.find((error, data) => {
        if(error) {
            return next(error);
        } else {
            res.json(data);
        }
    });
});

userRoute.route('/user').post((req, res, next) => {
    Users.create(req.body, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    })
});

module.exports = userRoute;
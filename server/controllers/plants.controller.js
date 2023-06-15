const Plant = require('../models/plant.model');
const jwt = require('jsonwebtoken');
const secret = process.env.secret_key
const User = require('../models/users.model')

module.exports = {
    createPlant: (req, res) => {
        const user = jwt.verify(req.cookies.usertoken, secret);
        Plant.create({ ...req.body, creator: user })
            .then(e => res.status(201).json(e))
            .catch(err => {
                console.log('Create Plant Error', err);
                res.status(400).json({ message: 'Error creating plant', error: err })})
            }
    }
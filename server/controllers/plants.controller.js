const Plant = require('../models/plants.model');
const jwt = require('jsonwebtoken');
const secret = process.env.secret_key
const User = require('../models/users.model')

module.exports = {
    createPlant: (req, res) => {
        console.log("trying to create plant")
        const user = jwt.verify(req.cookies.usertoken, secret);
        Plant.create({ ...req.body, creator: user })
            .then(e => res.status(201).json(e))
            .catch(err => {
                console.log('Create Plant Error', err);
                res.status(400).json({ message: 'Error creating plant', error: err })})
            },
            
    getAllPlants: (req, res) => {
        Plant.find({})
        .populate('creator', 'firstName')
        .then(e => res.json(e))
        .catch(err => {
            console.log('Get All Plants Error', err);
            res.status(400).json({ message: 'Error getting all plants', error: err })})
        },

    deletePlant: (req, res) => {
        Plant.findByIdAndDelete(req.params.id)
        .then(result => res.json(result))
        .catch(err => res.json(err))
        },
    
    editPlant: (req, res) => {
        Plant.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
        .then(updateStore => res.json(updateStore))
        .catch(err => res.json(err))
},
    getOnePlant: (req, res) => {
        Plant.findById(req.params.id)
        .then(e => res.json(e))
        .catch(err => res.json(err))
    }
}
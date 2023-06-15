const User = require('../models/users.model')
const secret = process.env.secret_key
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

module.exports = {
    register: async (req, res) => {
        try {
            const submitEmail = await User.findOne({ email: req.body.email});
            if (submitEmail) {
                res.status(400).json({
                    message:' Oops! Email already exists! '
                });
            } else {
            const newUser = await User.create(req.body);
            const userToken = jwt.sign({_id: newUser._id, email: newUser.email}, secret, {expiresIn: "2h"});
            console.log(userToken)
            res.status(201).cookie('usertoken', userToken, {httpOnly: true, maxAge:2 * 60 * 60 * 100}).json({
                message: "Success!",
                user: newUser
            }); }
        } catch (err) {
            return res.status(400).json(err);
        }
    },

    login: async (req, res) => {
        try {
            const user = await User.findOne({ email: req.body.email});
            if(user){
                const correctPassword = await bcrypt.compare(req.body.password, user.password);
                if(correctPassword){
                    const userToken = jwt.sign({_id: user._id, email: user.email}, secret, {expiresIn:'4h'});
                    res.status(201).cookie('usertoken', userToken, {httpOnly: true, maxAge:2 * 60 * 60 * 100}).json({
                        message: "Success!",
                        user: user,
                    })
                }
                else {
                    res.status(400).json({
                        message: "Unsuccessful login, try again or register!"
                    });
                }
            }
            else {
                res.status(400).json({
                    message: 'Unsuccessful login attempt, try again or register'
                })
            }
        }
        catch (err) {
            res.status(400).json({error: err});
        }
    },

    logout: (req, res) => {
        console.log("logging user out")
        res.clearCookie('usertoken');
        res.sendStatus(200);
    },

    logged: async (req, res) => {
        try {
            const user = jwt.verify(req.cookies.usertoken, secret);
            const currentUser = await User.findOne({_id: user._id});
            res.json(currentUser)
        } catch (err) {
            res.status(400).json({err: 'Please log in'})
        }
    },

    // userPlants: async (req, res) => {
    //     try {
    //         const userId = req.params._id;
    //         const { common_name, scientific_name, watering, sunlight, propagation, hardiness } = req.body;
    //         const user = await 
    //         User.findById(userId);
    //         if (!user) {
    //             res.status(400).json({message: "User not found"});
    //         }
    //         const existingPlant = user.favorites.find(plant => plant.common_name === common_name);
    //         if (existingPlant) {
    //             res.status(400).json({message: "Plant already in favorites"});
    //         }
    //         const newPlant = {
    //             common_name,
    //             scientific_name,
    //             watering,
    //             sunlight,
    //             propagation,
    //             hardiness
    //         };
    //         user.favoritePlants.push(newPlant);
    //         await user.save();

    //         res.json({message:'Plant added to favorites', user});
    //     } catch (err) {
    //         res.status(500).json({err: err.message});
    //     }
    // },
    // getUserFavorites: async (req, res) => {
    //     try {
    //         const userId = req.params._id;
    //         const user = await User.findById(userId).populate('favoritePlants');
    //         if (!user) {
    //             res.status(400).json({message: "User not found"});
    //         }
    //         const favoritePlants = user.favoritePlants.map(plant => ({
    //             common_name: plant.common_name,
    //             scientific_name: plant.scientific_name,
    //             watering: plant.watering,
    //             sunlight: plant.sunlight,
    //             propagation: plant.propagation,
    //             hardiness: plant.hardiness
    //         }))
    //         res.json({message: 'Success', favoritePlants});
    //     } catch (err) {
    //         console.log(err)
    //         res.status(500).json({err: err.message});
    //     }
    // },

    updateUser: async (req, res) => {
        try{
        console.log('updating user: ', req.body)
        const updateUser = User.findOneAndUpdate({ _id: req.body._id}, req.body, {new: true})
        res.json(updateUser);
        }
            catch (error) {
                console.log('error updating user: ', error)
                res.status(400).json(error)
            }
    },

    getOneUser: async (req, res) => {
        console.log('getting one user: ', req.params.id)
        User.findOne({ _id: req.params.id})
            .then(e => res.json(e))
            .catch(err => res.status(400).json(err))
    },

    // getAllUsers: async (req, res) => {
    //     console.log('getting all users')
    //     User.find()
    //         .then(e => res.json(e))
    //         .catch(err => res.status(400).json(err))
    // },

    // getUserByCity: async (req, res) => {
    //     console.log('getting all users by city')
    //     User.find({ city: req.params.city})
    //         .then(e => res.json(e))
    //         .catch(err => res.status(400).json(err))
    // }
}
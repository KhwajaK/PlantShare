const mongoose = require('mongoose');

const PlantSchema = new mongoose.Schema({
    common_name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [2, "Name must be at least 2 characters long"]
    },
    details: {
        type: String,
        required: [true, "Details are required"],
        minlength: [2, "Details must be at least 2 characters long"]
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {timestamps: true});

module.exports = mongoose.model('Plant', PlantSchema);
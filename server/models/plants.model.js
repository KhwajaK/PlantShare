const mongoose = require('mongoose');

const PlantSchema = new mongoose.Schema({
    api_id: {
        type: Number,
    },
    common_name: {
        type: String,
    },
    scientific_name: {
        type: [String],
    },
    watering: {
        type: String,
    },
    sunlight: {
        type: [String],
    },
    propagation: {
        type: [String],
    }, 
    hardiness: {
        min: {
            type: String,
        },
        max: {
            type: String,
        },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
    }
}, {timestamps: true});
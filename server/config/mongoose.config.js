const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/plant_share', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(()=> console.log('Establised a connection to the database'))
    .catch(err => console.log('Something went wrong connecting to the database', err))
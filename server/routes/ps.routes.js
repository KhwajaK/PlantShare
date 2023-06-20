const UserController = require('../controllers/users.controller');
const PlantController = require('../controllers/plants.controller');

module.exports = app => {
    app.post('/api/register', UserController.register);
    app.post('/api/login', UserController.login);
    app.post('/api/logout', UserController.logout);
    app.get('/api/users/logged', UserController.logged);
    app.put('/api/addfavorite/:id', UserController.userFavorite)

    // Plant Routes
    app.post('/api/addPlant', PlantController.createPlant);
    app.get('/api/allplants', PlantController.getAllPlants);
    app.delete('/api/deleteplant/:id', PlantController.deletePlant);
    app.put('/api/editplant/:id', PlantController.editPlant);
    app.get('/api/plant/:id', PlantController.getOnePlant);

    // app.get('/api/users/:id', UserController.getOneUser);
    // app.put('/api/update/user/:id', UserController.updateUser);


}
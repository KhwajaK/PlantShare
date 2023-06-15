const UserController = require('../controllers/users.controller');
const PlantController = require('../controllers/plants.controller');
// const PostController = require('../controllers/posts.controller');

module.exports = app => {
    app.post('/api/register', UserController.register);
    app.post('/api/login', UserController.login);
    app.post('/api/logout', UserController.logout);
    app.get('/api/users/logged', UserController.logged);
    app.post('/api/addPlant', PlantController.createPlant);

    app.get('/api/users/:id', UserController.getOneUser);
    app.put('/api/update/user/:id', UserController.updateUser);


}
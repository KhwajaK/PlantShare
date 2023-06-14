const UserController = require('../controllers/users.controller');
// const PostController = require('../controllers/posts.controller');

module.exports = app => {
    app.post('/api/register', UserController.register);
    app.post('/api/login', UserController.login);
    app.post('/api/logout', UserController.logout);
    app.get('/api/users', UserController.getAllUsers);
    app.get('/api/users/logged', UserController.logged);
    // app.get('/api/allposts', PostController.getAllPosts);
    // app.post('/api/createpost', PostController.createPost);
    app.get('/api/users/:id', UserController.getOneUser);
    app.get('/api/users/city/:city', UserController.getUserByCity);
    app.put('/api/update/user/:id', UserController.updateUser);
    // app.get('/api/posts/:id', PostController.getUserPosts);
    // app.get('/api/posts/:city', PostController.getPostByCity);
    // app.patch('/api/posts/:id', PostController.updatePost);
    // app.delete('/api/posts/:id', PostController.deletePost);
    // app.post('/api/posts/:id/comment', PostController.createComment);
    // app.delete('/api/posts/:id/comment/:commentId', PostController.deleteComment);

}
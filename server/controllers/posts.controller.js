// const Post = require('../models/posts.model')
// const User = require('../models/users.model')
// const jwt = require('jsonwebtoken')
// const secret = process.env.secret_key

// module.exports = {
//     createPost: (req, res) => {
//         const user = jwt.verify(req.cookies.usertoken, secret);
//         Post.create({ ...req.body, user: user._id })
//             .then((post) => {
//                 User.findOneAndUpdate(
//                     user._id, 
//                     { $push: { posts: post._id }},
//                     { new: true, runValidators: true }
//                 )
//                     .then(()=> {
//                     res.status(201).json(post);
//                     })
//                     .catch( (err) => {
//                         res.status(400).json({ 
//                             message: 'Error updating user post', 
//                             error: err,
//                         });
//                     });
//             })
//             .catch((err) => {
//                 console.log(err);
//                 res.status(400).json({
//                     message: 'Error creating post',
//                     error: err,
//                     });
//                 });
//             },
//     getAllPosts: (req, res) => {
//         Post.find()
//             .populate('user', 'firstName lastName')
//             .then( e => res.json(e))
//             .catch( err => res.status(400).json({ message: 'Error getting all posts',error: err})) },
    
//     getUserPosts: (req, res) => {
//         const user = jwt.verify(req.cookies.usertoken, secret);
//         Post.find({ user: user._id })
//             .populate('user', 'firstName lastName')
//             .then( e => res.json(e))
//             .catch( err => res.status(400).json({ message: 'Error getting this users posts', error: err})) },

//     updatePost: (req, res) => {
//         Post.findOneAndUpdate({ _id: req.params.id}, req.body, { new: true, runValidators: true })
//             .then( e => res.json(e))
//             .catch( err => res.status(400).json({ message: 'Error updating post', error: err.errors})) },
//     getPostByCity: (req, res) => {
//         Post.find({ city: req.params.city})
//             .populate('user', 'firstName lastName')
//             .then( e => res.json(e))
//             .catch( err => res.status(400).json({ message: 'Error getting posts by city', error: err})) 
//         },

//     deletePost: (req, res) => {
//         Post.deleteOne({ _id: req.params.id })
//             .then( e => res.json(e))
//             .catch( err => res.status(400).json({ message: 'Error deleting post', error: err})) 
//         },
//     createComment: (req, res) => {
//         const user = jwt.verify(req.cookies.usertoken, secret);
//         const { postId, content } = req.body;
    
//         Comment.create({ user: user._id, post: postId, content })
//             .then((comment) => {
//                 User.findByIdAndUpdate(
//                     user._id,
//                     { $push: { comments: comment._id } },
//                     { new: true }
//                 )
//                     .then(() => {
//                         res.status(201).json(comment);
//                     })
//                     .catch((err) => {
//                         res.status(400).json({
//                             message: 'Error updating user with comment',
//                             error: err,
//                         });
//                     });
//             })
//             .catch((err) => {
//                 console.log(err);
//                 res.status(400).json({
//                     message: 'Error creating comment',
//                     error: err,
//             });
//         });
//     },
//     deleteComment: (req, res) => {
//         Comment.deleteOne({ _id: req.params.id })
//             .then( e => res.json(e))
//             .catch( err => res.status(400).json({ message: 'Error deleting comment', error: err})) 
//         }
//     }
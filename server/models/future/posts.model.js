// const mongoose = require('mongoose');

// const PostSchema = new mongoose.Schema({
//     content: {
//         type: String,
//         required: [true, "Post content is required"],
//         minlength: [2, "Post content must be at least 2 characters long"],
//         maxlength: [280, "Post content cannot be more than 280 characters long"],
//     },
//     user: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'User'
//     },
//     likes: {
//         type: Number,
//         default: 0
//     },
//     comments: [{
//         user: {
//             type: mongoose.Schema.Types.ObjectId,
//             ref: 'User'
//         },
//         content: {
//             type: String,
//             required: [true, "Comment content is required"],
//             minlength: [2, "Comment content must be at least 2 characters long"],
//             maxlength: [280, "Comment content cannot be more than 280 characters long"],
//         }
//     }]
// });
// const Post = mongoose.model('Post', PostSchema);

// module.exports = Post;
// const mongoose = require('mongoose');

// const CommentSchema = new mongoose.Schema({
//     user: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'User'
//     },
//     post: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Post',
//     },
//     content: {
//         type: String,
//         required: [true, "Comment content is required"],
//         minlength: [2, "Comment content must be at least 2 characters long"],
//         maxlength: [280, "Comment content cannot be more than 280 characters long"],
//     }
// }, {timestamps: true});

// const Comment = mongoose.model('Comment', CommentSchema);

// module.exports = Comment;
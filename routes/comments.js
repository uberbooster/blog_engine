var express = require('express');
var router = express.Router();

router.get('/comments/:postId', getCommentsForAPost);
router.post('/comments', createComment);
router.delete('/comments/:commentId', deleteComment);
router.put('/comments/:commentId', updateComment);

module.exports = router;

function getCommentsForAPost(req, res, next){
  console.log('getting all of the comments');
  next();
}
function createComment(req, res, next){
//   var comment =
 }
// function createPost(req, res, next){
//   var post = new Post({
//     title: req.body.title,
//     author: req.body.author,
//     body: req.body.body,
//     created: new Date(),
//     updated: new Date()
//   });
//   post.save(function(err, newPost){
//     if(err){
//       res.status(500).json({
//         msg: err
//       });
//     } else {
//       res.status(201).json({
//         post: newPost
//       });
//     }
//   });
// }
function deleteComment(req, res, next){
  console.log('deleting a comment');
  next();
}
function updateComment(req, res, next){
  console.log('updating a comment');
  next();
}

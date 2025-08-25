const {
     createPost, 
     updatePost, 
     deletePost,
     getAllAndLikes
    } = require('../controllers/postController');

const router = require('express').Router();

router.post('/post', createPost);
router.put('/post/:id', updatePost)
router.delete('/post/:id', deletePost)
router.get('/allpost', getAllAndLikes)
module.exports = (router);
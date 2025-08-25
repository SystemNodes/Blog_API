const {
     createPost, 
     updatePost, 
     deletePost
    } = require('../controllers/postController');

const router = require('express').Router();

router.post('/post', createPost);
router.put('/post/:id', updatePost)
router.delete('/post/:id', deletePost)

module.exports = (router);
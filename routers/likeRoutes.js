const { 
    createLikes, 
    // calculateLikes, 
    deleteLike
} = require('../controllers/likeController');

const router = require('express').Router();

router.post('/like/:id',  createLikes)
// router.get('/like/:postId', calculateLikes)
router.delete('/like/:id', deleteLike)

module.exports = router
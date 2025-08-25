const {
     createComment, updateComment, deleteComment 
    } = require('../controllers/commentController');

const router = require('express').Router();

router.post('/comment/:id', createComment);
router.put('/comment/:id', updateComment);
router.delete('/comment/:id', deleteComment)

module.exports = router
const {
     createComment, updateComment, deleteComment, getAllComments 
    } = require('../controllers/commentController');

const router = require('express').Router();

router.post('/comment/:id', createComment);
router.put('/comment/:id', updateComment);
router.delete('/comment/:id', deleteComment)
router.get('/comment', getAllComments)

module.exports = router
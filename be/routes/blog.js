const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');
const auth = require('../middleware/auth');

router.post('/', auth, blogController.createPost);
router.get('/', blogController.getPosts);
router.get('/:id', blogController.getPostById);
router.put('/:id', auth, blogController.updatePost);
router.delete('/:id', auth, blogController.deletePost);

module.exports = router;

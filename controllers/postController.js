const {post, like} = require('../models');

exports.createPost = async(req, res)=>{
    try{
        const {email,title,description,author} = req.body;
        const data = {
            email,
            title,
            description,
            author
        }
        const createInfo = await post.create(data)

        res.status(201).json({
            message: `Post successfully created`,
            data: createInfo
        })
    }catch (err) {
        res.status(500).json({
            message: "Internal server error",
            error: err.error[0].message || err.message
        })
    }
};

exports.updatePost = async (req, res) => {
    try {
      const { id } = req.params;
      const { email,title,description,author } = req.body;
      const data = {
        email,
        title,
        description,
        author
    }
  
    const [updated] = await post.update(data, {
        where: { id }
      });
  
      if (updated) {
        const updatedPost = await post.findByPk(id);
        return res.status(200).json({
            message: "Successfully updated a Post",
            data: updatedPost
        });
    }
  
      res.status(404).json({
        message: `Post with id ${id} not found`
      });
    } catch (err) {
      res.status(500).json({
        message: "Internal server error",
        error: err.message
      });
    }
};

exports.deletePost = async (req, res) => {
    try {
      const { id } = req.params;
  
      const postToDelete = await post.findOne({ where: { id } });
  
      if (!postToDelete) {
        return res.status(404).json({
          message: `Post with id ${id} not found`
        });
      }
  
      const likeCount = await like.count({ where: { postId: id } });
      
      await like.destroy({ where: { postId: id } });
      await post.destroy({ where: { id } });
  
      if (likeCount === 0) {
        return res.status(200).json({
          message: "Post deleted successfully. This post had no likes."
        });
      }
  
      res.status(200).json({
        message: `Post deleted successfully along with ${likeCount} like(s).`
      });
  
    } catch (err) {
      res.status(500).json({
        message: "Internal server error",
        error: err.message
      });
    }
  };
  
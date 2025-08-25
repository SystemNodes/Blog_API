const { like } = require('../models');

exports.createLikes = async (req, res) => {
  try {
    const { id } = req.params;
    const { email } = req.body;

    const existingLike = await like.findOne({
      where: { email, postId: id }
    });

    if (existingLike) {
      await existingLike.destroy();

      const likeCount = await like.count({ where: { postId: id } });

      return res.status(200).json({
        message: "You unliked this post",
        totalLikes: likeCount
      });
    }

    const newLike = await like.create({ postId: id, email });

    const likeCount = await like.count({ where: { postId: id } });

    res.status(201).json({
      message: "Like successfully created",
      data: {
        like: newLike,
        totalLikes: likeCount
      }
    });

  } catch (err) {
    res.status(500).json({
      message: "Internal server error",
      error: err.message
    });
  }
};

// exports.calculateLikes = async(req, res)=>{
//     try{
//         const {postId} = req.params
//         const likeCount = await like.count({ where: { postId} });

//         res.status(200).json({
//             message: `${likeCount} people liked this post`
//         })

//     }catch (err){
//         res.status(500).json({
//             message: "Internal server error",
//             error: err.message
//           }); 
//     }
// }

exports.deleteLike = async (req, res) => {
  try {
    const { id } = req.params;   
    const { email } = req.body;

    const existingLike = await like.findOne({
      where: { id, email }
    });

    if (!existingLike) {
      return res.status(404).json({
        message: `No like found for post with id ${id} by ${email}`
      });
    }

    await existingLike.destroy();

    const likeCount = await like.count({ where: { id } });

    res.status(200).json({
      message: "Like deleted successfully",
      totalLikes: likeCount
    });

  } catch (err) {
    res.status(500).json({
      message: "Internal server error",
      error: err.message
    });
  }
};

const { comment: Comment } = require("../models");

exports.createComment = async (req, res) => {
  try {
    const { id: postId } = req.params; 
    const { email, comment } = req.body;

    if (!comment) {
      return res.status(400).json({ message: "Comment content is required" });
    }

    const newComment = await Comment.create({
      postId,
      email,
      comment
    });

    res.status(201).json({
      message: "Comment created successfully",
      data: newComment
    });
  } catch (err) {
    res.status(500).json({
      message: "Internal server error",
      error: err.message
    });
  }
};


exports.updateComment = async (req, res) => {
  try {
    const { id } = req.params; 
    const { comment } = req.body;

    if (!comment) {
      return res.status(400).json({ message: "Comment content is required" });
    }

    const existingComment = await Comment.findOne({ where: { id } });

    if (!existingComment) {
      return res.status(404).json({ message: `Comment with id ${id} not found` });
    }

    await existingComment.update({ comment });

    res.status(200).json({
      message: "Comment updated successfully",
      data: existingComment
    });
  } catch (err) {
    res.status(500).json({
      message: "Internal server error",
      error: err.message
    });
  }
};

exports.deleteComment = async (req, res) => {
  try {
    const { id: postId } = req.params;

    const existingComment = await Comment.findOne({ where: { id: postId } });

    if (!existingComment) {
      return res.status(404).json({ message: `Comment with id ${id} not found` });
    }

    await existingComment.destroy();

    res.status(200).json({ message: "Comment deleted successfully" });
  } catch (err) {
    res.status(500).json({
      message: "Internal server error",
      error: err.message
    });
  }
};

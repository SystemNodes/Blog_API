'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      post.hasMany(models.like, {
        foreignKey: 'postId',
        as: 'All Likes'
      });
      post.hasMany(models.comment, {
        foreignKey: 'postId',
        as: 'All Comments'
      });
    }
  }
  post.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    author: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'post',
  });
  return post;
};
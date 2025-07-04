import user from "./models/Users/user.table.js";
import Post from "./models/Posts/post.table.js";
import Comment from "./models/Comments/comment.table.js";

Comment.belongsTo(user, {
    foreignKey: "userId",
    onUpdate: "CASCADE",
    onDelete: "CASCADE"
});
user.hasMany(Comment, {
    foreignKey: 'userId',
    onUpdate: "CASCADE",
    onDelete: "CASCADE"
});
Comment.belongsTo(Post, {
    foreignKey: "postId",
    onUpdate: "CASCADE",
    onDelete: "CASCADE"
});
Post.hasMany(Comment, {
    foreignKey: "postId",
    onUpdate: "CASCADE",
    onDelete: "CASCADE"
});
Post.belongsTo(user, {
    foreignKey: "userId",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
});
user.hasMany(Post, {
    foreignKey: "userId",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});
export {user, Post, Comment};
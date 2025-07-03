import sequelize from "../../dbConnection.js";
import {DataTypes, Model, STRING} from "sequelize";
import user from "../Users/user.table.js"
import Post from "../Posts/post.table.js"

class Comment extends Model {
}

Comment.init({
        content: {
            type: DataTypes.TEXT,
        },
        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'users',
                key: 'id'
            },
        },
        postId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'posts',
                key: 'id'
            },
        }
    }, {
        sequelize,
        modelName: "Comment",
    }
);
Comment.belongsTo(user, {
    foreignKey: "userId",
    onUpdate: "CASCADE",
    onDelete: "CASCADE"
})
user.hasMany(Comment, {
    foreignKey: 'userId',
    onUpdate: "CASCADE",
    onDelete: "CASCADE"
})
Comment.belongsTo(Post, {
    foreignKey: "postId",
    onUpdate: "CASCADE",
    onDelete: "CASCADE"
})
Post.hasMany(Comment, {
    foreignKey: "postId",
    onUpdate: "CASCADE",
    onDelete: "CASCADE"
})
export default Comment;

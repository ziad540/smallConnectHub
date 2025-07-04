import sequelize from "../../dbConnection.js";
import {DataTypes, Model, STRING} from "sequelize";

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

export default Comment;

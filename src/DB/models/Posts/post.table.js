import sequelize from "../../dbConnection.js";
import {DataTypes, Model, STRING} from "sequelize";

class Post extends Model {
}

Post.init({
        title: {
            type: DataTypes.STRING,
        },
        content: {
            type: DataTypes.TEXT,
        },
        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'users',
                key: 'id'
            },
        }
    }, {
        sequelize,
        modelName: "Post",
        paranoid: true,
    }
);

export default Post;


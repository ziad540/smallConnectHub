import sequelize from "../../dbConnection.js";
import {DataTypes, Model, STRING} from "sequelize";
import user from "../Users/user.table.js"

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
Post.belongsTo(user,
    {
        foreignKey: "userId",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    });
user.hasMany(Post,
    {
        foreignKey: "userId",
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
    });
export default Post;


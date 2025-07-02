import sequelize from "../../dbConnection.js";
import {DataTypes} from "sequelize";

const user = sequelize.define('User', {
    name: {
        type:DataTypes.STRING,
    },
    email: {
        type:DataTypes.STRING,
        unique:true,
    },
    password: {
        type:DataTypes.STRING,
    },
    role: {
        type:DataTypes.ENUM("user","admin"),
    }
});
export default user;
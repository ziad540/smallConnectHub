import sequelize from "../../dbConnection.js";
import {DataTypes} from "sequelize";

const user = sequelize.define('User', {
    name: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
            isEmail: true,
        }
    },
    password: {
        type: DataTypes.STRING,
        validate: {
            checkPasswordLength(value) {
                if (value.length < 6)
                    throw new Error("Password must greater than 6 characters long");
            }
        }
    },
    role: {
        type: DataTypes.ENUM("user", "admin"),
    }
});

const checkNameLength = async (user) => {
    if (user.name.length < 2) {
        throw new Error("Name must be greater than 2 characters long");
    }
};

user.beforeCreate(checkNameLength);

export default user;
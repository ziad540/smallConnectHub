import express from 'express';
import sequelize from "./DB/dbConnection.js";
import {user, Post, Comment} from "../src/DB/Relations.js";
import usersController from "./Modules/users/user.controller.js"
import postController from "./Modules/posts/post.controller.js";

const app = express();
app.use(express.json());


app.use('/users', usersController);
app.use('/posts', postController);

app.listen(3000, async () => {
    await sequelize.sync({force: false, alter: true});
    console.log("Server started and DB synced");
});
import express from 'express';
import sequelize from "./DB/dbConnection.js";
import user from "./DB/models/Users/user.table.js";
import Post from "./DB/models/Posts/post.table.js";
import Comment from "./DB/models/Comments/comment.table.js"

const app = express();


app.listen(3000, async () => {
    await sequelize.sync();
    console.log("Server started and DB synced");
});
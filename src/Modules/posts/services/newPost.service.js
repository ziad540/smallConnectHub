import {user, Post} from "../../../DB/Relations.js"

export const newPostService = async (req, res) => {
    try {

        const {title, content, userId} = req.body;
        if (!title || !content || !userId) {
            return res.status(400).json("Please fill all fields");
        }
        const User = await user.findByPk(userId);
        if (!User) {
            return res.status(404).json("User not found");
        }
        const newPost = new Post({
            title: title,
            content: content,
            userId: userId
        });
        await newPost.save();
        return res.status(200).json("Post created successfully");

    } catch (err) {
        return res.status(500).json({error: err.message});
    }
}
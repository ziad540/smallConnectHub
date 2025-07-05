import {Post} from "../../../DB/Relations.js"


export const deletePostService = async (req, res) => {
    try {

        const postId = req.params.id;
        const {userId} = req.body;
        console.log("user id in body",userId)
        if (!postId) {
            return res.status(400).json("Please fill all required fields");
        }
        const post = await Post.findByPk(postId);
        if (!post) {
            return res.status(402).json("Post not found");
        }
        if (post.getDataValue("userId") === userId) {
            await post.destroy({
                where: {
                    id: postId,
                }
            });
            return res.status(200).json("Post successfully deleted");
        }
        return res.status(400).json("You are not authorized to delete this post");
    } catch (err) {
        return res.status(500).json({error: err.message});
    }
}
import {Comment} from "../../../DB/Relations.js"

export const retrieve3MostRecentCommentsService = async (req, res) => {
    try {
        const postId = req.params.postId;
        if (!postId) {
            return res.status(400).json("Please fill all required fields");
        }
        const comments = await Comment.findAll({
            where: {postId: postId},
            order: [['createdAt', 'DESC']],
            limit: 3
        })
        if (comments && comments.length > 0) {
            return res.status(200).json(comments);
        }
        return res.status(200).json("no comments found");
    } catch (err) {
        return res.status(500).json({error: err.message});
    }
}
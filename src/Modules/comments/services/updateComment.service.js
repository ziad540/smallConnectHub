import {Comment} from "../../../DB/Relations.js"

export const updateCommentService = async (req, res) => {
    try {
        const {userId, content} = req.body;
        const commentId = req.params.id;
        if (!userId || !content || !commentId) {
            res.status(400).json("please fill all the required fields")
        }
        const comment = await Comment.findByPk(commentId);
        if (!comment) {
            return res.status(402).json({error: "Comment not found"});
        }
        if (comment.userId === userId) {
            await comment.update({content: content})
            return res.status(200).json("successfully updated comment")
        }
        return res.status(404).json("You are not authorized to edit this comment")
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}
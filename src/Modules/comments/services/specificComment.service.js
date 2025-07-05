import {user, Post, Comment} from "../../../DB/Relations.js"

export const specificCommentService = async (req, res) => {
    try {
        const commentId = req.params.id;
        if (!commentId) {
            return res.status(400).json("Please fill all required fields");
        }
        const comments = await Comment.findAll({
            attributes: ['id', 'content'],
            include: [
                {
                    model: user,
                    attributes: ['id', 'name']
                },
                {
                    model: Post,
                    attributes: ['id', 'title']
                }
            ]
        });
        if (comments.length > 0) {
            res.status(200).json(comments);
        }
        return res.status(200).json("no comment found");
    } catch (err) {
        return res.status(500).json({error: err.message});
    }

}
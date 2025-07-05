import {Comment} from "../../../DB/Relations.js"

export const findOrCreateService = async (req, res) => {
    try {
        const {postId, userId, content} = req.body;
        if (!postId || !userId || !content) {
            return res.status(400).json("please fill all the required fields")
        }
        const [comment, created] = await Comment.findOrCreate({
            where: {
                postId: postId,
                userId: userId,
                content: content
            },
            defaults: {
                postId: postId,
                userId: userId,
                content: content
            }
        });
        return res.status(200).json({comment, created});

    } catch (err) {
        return res.status(500).json({error: err.message});
    }
}
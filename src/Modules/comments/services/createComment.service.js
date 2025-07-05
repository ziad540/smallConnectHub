import {Comment} from "../../../DB/Relations.js"

export const createCommentService = async (req, res) => {
    try {
        console.log("ana hena")
        const {comments} = req.body;
        console.log("comments", comments.length);
        if (!comments) {
            return res.status(400).json("please fill all input data");
        }
        await Comment.bulkCreate(comments, {
            validate: true,
        });
        return res.status(200).json("Comments created successfully");
    } catch (err) {
        return res.status(500).json({error: err.message});
    }
}
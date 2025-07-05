import {Comment} from "../../../DB/Relations.js"
import {Op} from "sequelize";

export const retrieveCommentsBySpecificWordService = async (req, res) => {
    try {
        const {search} = req.query;
        console.log(search);
        if (!search) {
            return res.status(400).json("Please fill all required fields");
        }
        const comments = await Comment.findAll({
            where: {
                content: {
                    [Op.like]: `%${search}%`,
                }
            }
        });
        return res.status(200).json(comments);
    } catch (err) {
        return res.status(400).json({error: err.message});
    }
}
import {Post, Comment} from "../../../DB/Relations.js"
import {Sequelize} from "sequelize";

export const retrieveAndCountCommentsService = async (req, res) => {
    try {
        const allPosts = await Post.findAll({
            attributes: [
                'id',
                'title',
                'content',
                [Sequelize.fn("COUNT", Sequelize.col("comments.id")), "commentsCount"]
            ],
            include: [
                {
                    model: Comment,
                    as: 'comments',
                    attributes: []
                }
            ],
            group: ['Post.id']
        });
        return res.status(200).json(allPosts);
    } catch (err) {
        return res.status(500).json({error: err.message});
    }
}
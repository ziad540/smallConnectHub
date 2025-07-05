import {user, Post, Comment} from "../../../DB/Relations.js"

export const retrievePostsService = async (req, res) => {
    try {
        const detailsPosts = await Post.findAll({
            attributes: ['title', 'content'],
            include: [{
                model: user,
                attributes: ['name']
            }, {
                model: Comment,
                attributes: ['id', 'content']
            }
            ]
        });
        res.status(200).json(detailsPosts);
    } catch (err) {
        return res.status(500).json({error: err.message});
    }
}
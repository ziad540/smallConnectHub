import {user} from "../../../DB/Relations.js";

export const findEmail = async (req, res) => {
    try {
        const {email} = req.query;
        if (!email) {
            return res.status(400).json("Please fill all required fields");
        }
        const User = await user.findOne({
            where: {
                email: email
            }
        });
        if (!User) {
            return res.status(404).json({error: "User not found"});
        }
        return res.status(200).json(User.toJSON());
    } catch (err) {
        return res.status(500).json({error: err.message});
    }
}
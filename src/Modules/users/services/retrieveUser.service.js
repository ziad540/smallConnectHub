import {user} from "../../../DB/Relations.js";


export const retrieveUserService = async (req, res) => {
    try {
        const userID = req.params.id;
        if (!userID) {
            return res.status(400).json("Please fill all required fields");
        }
        const User = await user.findByPk(userID);
        if (!User) return res.status(404).json("User not found");
        return res.status(200).json(User.toJSON());
    } catch (err) {
        return res.status(500).json({error: err.message});
    }
}
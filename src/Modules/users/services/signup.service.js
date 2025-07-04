import {user} from "../../../DB/Relations.js";

export const signupService = async (req, res) => {

    try {
        const {name, email, password, role} = req.body;
        if (!name || !email || !password || !role) {
            return res.status(400).json("Please fill all required fields");
        }
        const userDb = await user.findOne({
            where: {
                email: email
            }
        });
        if (userDb) {
            return res.status(400).json("Email already exists");
        }
        await user.create({name, email, password, role});
        return res.status(200).json("User added successfully");
    } catch (err) {
        return res.status(500).json({error: err.message});
    }
}
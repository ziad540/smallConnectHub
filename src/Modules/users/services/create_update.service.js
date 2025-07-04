import {user} from "../../../DB/Relations.js";


export const createOrupdate = async (req, res) => {
    try {
        const userID = req.params.id;
        const {name, email, password, role} = req.body;
        const User = await user.findByPk(userID)
        if (!User) {
            await user.create({id: userID, name, email, password, role}, {
                validate: false
            });
        } else {
            await User.update({
                name: name,
                email: email,
                password: password,
                role: role
            }, {validate: false});
        }
        return res.status(200).json("Successfully create or update user");
    } catch (err) {
        return res.status(500).send({error: err.message});
    }
}
import User from '../models/user.model.js';

// Register logic
export const register = async (req, res) => {
    try {
        const { fullName, email, password } = req.body;
        const userExist = await User.findOne({ email });
        if (userExist) {
            res.status(400).json({ message: "Email already exist!!" });
        }
        const userCreated = await User.create({ fullName, email, password });

        res.status(200).json({
            message: "registration successful!!",
            token: await userCreated.generateToken(),
            userId: userCreated._id.toString(),
        });
    } catch (error) {
        next(error);
    }
}

// Login logic
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const userExist = await User.findOne({ email });

        if (!userExist) {
            res.status(400).json({ message: "Invalid username or password!!" });
        }

        const user = await userExist.comparePassword(password);

        if (user) {
            res.status(201).json({
                message: "Login successful!!",
                token: await userExist.generateToken(),
                userId: userExist._id.toString()

            });
        }
        else {
            res.status(400).json({ message: "Invalid usernamne or password!!" })
        }
    } catch (error) {
        next(error);
    }
}

// Userauth logic
export const userauth = async (req, res) => {
    try {
        const userData = req.user;
        return res.status(200).json({ userData });
    } catch (error) {
        console.log("Error from the userauth route", error);
    }
}
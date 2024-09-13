import User from "../models/user.model.js";
export const login = async (req, res) => {
    res.send('Hello from Login');
};

export const signup = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        // Check if a user with the same email already exists
        const userExists = await User.findOne({ email });

        if (userExists) {
            // If the user already exists, send a 400 Bad Request response
            return res.status(400).json({ message: 'User already exists' });
        }

        // Create a new user if the email is unique
        const user = await User.create({ name, email, password });

        // Send a successful response (you may want to send more user details or a token here)
        res.status(201).json({ message: 'User created successfully', user });
    } catch (error) {
        // Handle any errors that occur during user creation
        console.log("Error in signup controller", error.message);
        res.status(500).json({ message: error.message });
    }
};
;

export const logout = async (req, res) => {
    res.send('Hello from logout');
};

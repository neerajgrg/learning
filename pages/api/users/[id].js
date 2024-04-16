import User from '../../../models/user';
import connectDB from '../../../lib/db';

connectDB();

const handler = async (req, res) => {
    try {
        // Extract user ID from the URL parameters
        const { id } = req.query;

        // Find the user in the database based on the user ID
        const user = await User.findOne({_id: id}).select("-password");

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        return res.status(200).json({
            message: "User found",
            data: user
        });
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

export default handler;
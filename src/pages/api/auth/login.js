// api/auth/login.js


import User from '../../../models/user';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import connectDB from '../../../lib/db';

connectDB();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;
    console.log(email);

    try {
      // Check if user exists
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }

      // Check password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }

      const tokenData = {
        id: user._id,
        username: user.username,
        email: user.email
      }

      const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET, { expiresIn: "1d" })

      // Set the token in a HttpOnly cookie
      res.setHeader('Set-Cookie', `token=${token}; HttpOnly; Path=/; Max-Age=${60 * 60 * 24}`);

      res.status(200).json({
        message: "Login successful",
        success: true,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
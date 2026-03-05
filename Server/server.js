const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB (Replace with your actual connection string later)
mongoose.connect('mongodb://localhost:27017/mindcare')
  .then(() => console.log("✅ Successfully connected to MongoDB via Compass"))
  .catch(err => console.error("❌ Database connection error:", err));

// User Schema
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true }
});
const User = mongoose.model('User', userSchema);

// Signup Route
app.post('/api/signup', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: "User created!" });
  } catch (error) {
    res.status(400).json({ error: "Email already exists" });
  }
});

// Login Route
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && await bcrypt.compare(password, user.password)) {
    res.json({ message: "Login successful", user: { name: user.name, email: user.email } });
  } else {
    res.status(401).json({ error: "Invalid credentials" });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
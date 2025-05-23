'use client';

import Card from './Card';
import { SiNodedotjs } from 'react-icons/si';

export default function Card9() {
    return (
        <Card
            order={9}
            logo={<SiNodedotjs className="w-full h-full text-[#339933]" />}
            title="Node.js"
            code={`// Node.js Express API
const express = require('express');
const app = express();

app.use(express.json());

// Get all users
app.get('/api/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// Create user
app.post('/api/users', async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.status(201).json(user);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});`}
            color="bg-gradient-to-br from-[#339933]/70 via-[#339933]/50 to-[#2B5E2B]/40 backdrop-blur-sm"
            textColor="text-[#339933]"
        />
    );
}

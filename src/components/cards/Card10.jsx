'use client';

import Card from './Card';
import { SiExpress } from 'react-icons/si';

export default function Card10() {
    return (
        <Card
            order={10}
            logo={<SiExpress className="w-full h-full text-black" />}
            title="Express"
            code={`// Express Middleware
const express = require('express');
const app = express();

// Custom middleware
const logger = (req, res, next) => {
  console.log(\`\${req.method} \${req.url}\`);
  next();
};

// Error handling middleware
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
};

app.use(logger);
app.use(errorHandler);`}
            color="bg-gradient-to-br from-black/45 via-black/30 to-gray-700/20"
            textColor="text-black"
        />
    );
}

'use client';

import Card from './Card';
import { SiHtml5 } from 'react-icons/si';

export default function Card1() {
    return (
        <Card
            order={1}
            logo={<SiHtml5 className="w-full h-full text-[#E34F26]" />}
            title="HTML"
            description="The standard markup language for web pages"
            code={`<!DOCTYPE html>
<html>
  <head>
    <title>My Web Page</title>
  </head>
  <body>
    <h1>Hello World!</h1>
    <p>Welcome to HTML</p>
  </body>
  <footer>
    <p>Copyright 2025</p>
  </footer>
</html>`}
            color="bg-gradient-to-br from-[#E34F26]/60 via-[#E34F26]/40 to-[#F16529]/30 backdrop-blur-sm"
            textColor="text-[#E34F26]"
        />
    );
}

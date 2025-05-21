'use client';

import Card from './Card';
import { SiCss3 } from 'react-icons/si';

export default function Card2() {
    return (
        <Card
            order={2}
            logo={<SiCss3 className="w-full h-full text-[#264DE4]" />}
            title="CSS"
            code={`/* Modern CSS Example */
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  padding: 1rem;
}

.card {
  background: linear-gradient(45deg, #264DE4, #2965F1);
  border-radius: 8px;
  padding: 1rem;
  color: white;
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
}`}
            color="bg-gradient-to-br from-[#264DE4]/45 via-[#2965F1]/30 to-[#1E90FF]/20"
            textColor="text-[#264DE4]"
        />
    );
}

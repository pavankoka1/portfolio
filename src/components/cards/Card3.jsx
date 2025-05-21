'use client';

import Card from './Card';
import { SiJavascript } from 'react-icons/si';

export default function Card3() {
    return (
        <Card
            order={3}
            logo={<SiJavascript className="w-full h-full text-[#F7DF1E]" />}
            title="JavaScript"
            code={`// Modern JavaScript Example
const fetchData = async () => {
  try {
    const response = await fetch('api/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
};

// Using modern features
const processData = (data) => {
  return data
    .filter(item => item.active)
    .map(({ id, name }) => ({ id, name }))
    .reduce((acc, curr) => ({ ...acc, [curr.id]: curr }), {});
};`}
            color="bg-gradient-to-br from-[#F7DF1E]/35 via-[#F7DF1E]/25 to-[#F0DB4F]/15"
            textColor="text-[#F7DF1E]"
        />
    );
}

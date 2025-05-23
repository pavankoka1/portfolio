'use client';

import Card from './Card';
import { FaReact } from 'react-icons/fa';

export default function Card4() {
    return (
        <Card
            order={4}
            logo={<FaReact className="w-full h-full text-[#61DAFB]" />}
            title="React"
            code={`// Modern React Component
import { useState, useEffect } from 'react';

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch('/api/user');
      const data = await response.json();
      setUser(data);
      setLoading(false);
    };
    fetchUser();
  }, []);

  if (loading) return <div>Loading...</div>;
  return <div>{user.name}</div>;
};`}
            color="bg-gradient-to-br from-[#61DAFB]/70 via-[#00D8FF]/50 to-[#61DAFB]/40 backdrop-blur-sm"
            textColor="text-[#61DAFB]"
        />
    );
}

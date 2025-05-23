'use client';

import Card from './Card';
import { SiNextdotjs } from 'react-icons/si';

export default function Card5() {
    return (
        <Card
            order={5}
            logo={<SiNextdotjs className="w-full h-full text-white" />}
            title="Next.js"
            code={`// Next.js App Router
import { Suspense } from 'react';

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <UserProfile />
    </Suspense>
  );
}

async function UserProfile() {
  const user = await fetchUser();
  return <div>{user.name}</div>;
}`}
            color="bg-gradient-to-br from-white/40 via-white/30 to-white/20 backdrop-blur-sm"
            textColor="text-white"
        />
    );
}

'use client';

import Card from './Card';
import { SiNuxtdotjs } from 'react-icons/si';

export default function Card8() {
    return (
        <Card
            order={8}
            logo={<SiNuxtdotjs className="w-full h-full text-[#00DC82]" />}
            title="Nuxt"
            code={`// Nuxt 3 Page
<script setup>
const { data: user } = await useFetch('/api/user')

// Server-side composable
const { data: posts } = await useAsyncData('posts', () => 
  $fetch('/api/posts')
)
</script>

<template>
  <div>
    <h1>{{ user.name }}</h1>
    <div v-for="post in posts" :key="post.id">
      {{ post.title }}
    </div>
  </div>
</template>`}
            color="bg-gradient-to-br from-[#00DC82]/30 via-[#00DC82]/20 to-[#00DC82]/10"
            textColor="text-[#00DC82]"
        />
    );
}

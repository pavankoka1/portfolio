'use client';

import Card from './Card';
import { SiNuxtdotjs } from 'react-icons/si';

export default function Card8() {
    return (
        <Card
            order={8}
            logo={<SiNuxtdotjs className="w-full h-full text-[#00DC82]" />}
            title="Nuxt"
            code={`// Nuxt 3 Page Component
<script setup>
const { data: posts } = await useFetch('/api/posts')

const title = ref('My Blog')
const description = ref('Welcome to my blog')
</script>

<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
    <div v-for="post in posts" :key="post.id">
      <h2>{{ post.title }}</h2>
      <p>{{ post.excerpt }}</p>
    </div>
  </div>
</template>`}
            color="bg-gradient-to-br from-[#00DC82]/70 via-[#00DC82]/50 to-[#00DC82]/40 backdrop-blur-sm"
            textColor="text-[#00DC82]"
        />
    );
}

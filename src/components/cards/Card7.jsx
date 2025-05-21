'use client';

import Card from './Card';
import { FaVuejs } from 'react-icons/fa';

export default function Card7() {
    return (
        <Card
            order={7}
            logo={<FaVuejs className="w-full h-full text-[#41B883]" />}
            title="Vue"
            code={`// Vue 3 Composition API
import { ref, onMounted } from 'vue'

export default {
  setup() {
    const user = ref(null)
    const loading = ref(true)

    onMounted(async () => {
      const response = await fetch('/api/user')
      user.value = await response.json()
      loading.value = false
    })

    return { user, loading }
  }
}

<template>
  <div v-if="loading">Loading...</div>
  <div v-else>{{ user.name }}</div>
</template>`}
            color="bg-gradient-to-br from-[#41B883]/45 via-[#41B883]/30 to-[#34495E]/20"
            textColor="text-[#41B883]"
        />
    );
}

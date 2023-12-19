<template>
  <div>{{ articleTitle }}</div>
</template>

<script lang="ts" setup>
  import { onMounted } from 'vue'
  import LayoutScreen from '@/components/LayoutScreen.vue'

  onMounted(async () => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/topstories.json`)
    const json = await res.json()
    const topNews = json.slice(0, 10)
    console.log(topNews)
  })
</script>

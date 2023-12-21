<template>
  <LayoutScreen :topNews="topNews">
  </LayoutScreen>
</template>

<script lang="ts" setup>
  import { onMounted, ref } from 'vue'
  import LayoutScreen from '@/components/LayoutScreen.vue'

  const topNews = ref<string[]>([])

  onMounted(async () => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/topstories.json`)
    const json = await res.json()
    topNews.value = json
  })
</script>

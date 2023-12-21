<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar title="Application bar"></v-app-bar>

    <v-navigation-drawer>
      <ArticleList :topNews="topNews" @clickedArticle="fetchNew"/>
    </v-navigation-drawer>

    <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
      <ArticleCard :newsArticle="newsArticle"/>
    </v-main>
  </v-layout>
</template>

<script lang="ts" setup>
  import type { ApiStoryObject } from '@/types/types'
  import ArticleCard from '@/components/ArticleCard.vue'

  import { ref } from 'vue'
import ArticleList from './ArticleList.vue';

  defineProps(['topNews'])

  const newsArticle = ref<ApiStoryObject | null>(null)

  const fetchNew = async (topNew: string) => {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/item/${topNew}.json`)
      const json = await res.json()
      newsArticle.value = json
    }
</script>

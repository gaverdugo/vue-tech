<template>
  <v-layout class="rounded rounded-md h-100">
    <v-app-bar title="Application bar"></v-app-bar>

    <v-navigation-drawer>
      <ArticleList 
        :topNews="slicedTopNews" 
        @clickedArticle="fetchNew"
        @clickedLoadMore="loadMore"
      />
    </v-navigation-drawer>

    <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
      <ArticleCard :newsArticle="newsArticle"/>
    </v-main>
  </v-layout>
</template>

<script lang="ts" setup>
  import type { ApiStoryObject } from '@/types/types'
  import ArticleCard from '@/components/ArticleCard.vue'
  import ArticleList from './ArticleList.vue';

  import { ref, computed } from 'vue'

  const props = defineProps(['topNews'])

  const newsArticle = ref<ApiStoryObject | null>(null)
  const newsPointer = ref<number>(0)

  const slicedTopNews = computed<number[]>(() => {
    return props.topNews.slice(newsPointer.value, newsPointer.value + 10)
  })

  const fetchNew = async (topNew: string) => {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/item/${topNew}.json`)
      const json = await res.json()
      newsArticle.value = json
  }

  const loadMore = () => {
    newsPointer.value = newsPointer.value + 10
  }
</script>

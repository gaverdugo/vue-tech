<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar title="Application bar"></v-app-bar>

    <v-navigation-drawer>
      <v-list>
        <v-list-item title="Navigation drawer">
        </v-list-item>
        <v-list-item :key="topNew" @click="() => fetchNew(topNew)" v-for="topNew in topNews">
            {{ topNew }}
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
      <v-card v-if="newsArticle">
        <v-card-item>
          <v-card-title>{{ newsArticle.title }}</v-card-title>
          <v-card-subtitle>By: {{ newsArticle.by }}</v-card-subtitle>
        </v-card-item>
        <v-card-actions>
          <v-btn :href="newsArticle.url">
            Go to article
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-main>
  </v-layout>
</template>

<script lang="ts" setup>
  import type { ApiStoryObject } from '@/types/types'
  import { ref } from 'vue'

  defineProps(['topNews'])

  const newsArticle = ref<ApiStoryObject | null>(null)

  const fetchNew = async (topNew: string) => {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/item/${topNew}.json`)
      const json = await res.json()
      newsArticle.value = json
    }
</script>

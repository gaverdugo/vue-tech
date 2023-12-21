<template>
  <v-card class="w-75 p-8">
      <div v-if="newsArticle">
        <v-card-item>
          <v-card-title>{{ newsArticle.title }}</v-card-title>
          <v-card-subtitle>By: {{ newsArticle.by }}</v-card-subtitle>
        </v-card-item>
        <v-card-actions>
          <v-btn :href="newsArticle.url">
            Go to article
          </v-btn>
        </v-card-actions>
      </div>
      <div v-else>
        <v-alert text="Select an article"/>
      </div>
    </v-card>
</template>

<script setup lang="ts">
  defineProps(['newsArticle'])
</script>
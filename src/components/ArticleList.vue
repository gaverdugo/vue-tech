<template>
  <v-list>
    <div v-if="topNews.length">
      <v-list-subheader>
        Top Stories
      </v-list-subheader>
      <v-list-item :key="topNew" @click="$emit('clickedArticle', topNew)" v-for="topNew in topNews">
          {{ topNew }}
      </v-list-item>
      <v-list-item @click="$emit('clickedLoadMore')" variant="tonal">
          Load More
      </v-list-item>
    </div>
    <div v-else>
      <v-list-subheader>
        Loading...
      </v-list-subheader>
    </div>
  </v-list>
</template>
<script setup lang="ts">
  defineProps(['topNews'])
  defineEmits(['clickedArticle', 'clickedLoadMore'])
</script>
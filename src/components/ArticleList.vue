<template>
  <v-list>
    <v-list-item title="Top Stories">
    </v-list-item>
    <v-list-item :key="topNew" @click="$emit('clickedArticle', topNew)" v-for="topNew in topNews">
        {{ topNew }}
    </v-list-item>
  </v-list>
</template>
<script setup lang="ts">
  defineProps(['topNews'])
  defineEmits(['clickedArticle'])
</script>